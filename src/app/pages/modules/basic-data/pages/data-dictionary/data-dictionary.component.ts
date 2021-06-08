import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataDictionaryCreateOrUpdate, DataDictionaryDto, DataDictionaryTreeDto } from '@app/api/ddd-api/models';
import { GetAllDataDto } from '@app/api/ddd-api/models/get-all-data-dto';
import { BlocDataDictionaryService, BlocDataDictionaryTreeService } from '@app/api/ddd-api/services';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DataDictionaryEditComponent } from '../../components/data-dictionary-edit/data-dictionary-edit.component';

@Component({
  selector: 'app-data-dictionary',
  templateUrl: './data-dictionary.component.html',
  styleUrls: ['./data-dictionary.component.scss']
})
export class DataDictionaryComponent implements OnInit {

  public get name(): string {
    return this.currentDto ? this.currentDto.name : '待选择';
  }

  showProgress: boolean = false;
  currentDto: DataDictionaryTreeDto;
  dataDictionarys: DataDictionaryDto[];
  selectedDataDictionarys: DataDictionaryDto[] = [];

  totalRecords: number;
  cols: any[];
  loading: boolean;
  selfEvent: LazyLoadEvent;
  searchName: string;
  itemCategoryId: string = null;

  constructor(private dictionaryTreeSrc: BlocDataDictionaryTreeService, private dictionarySrc: BlocDataDictionaryService, private ref: ChangeDetectorRef, protected dialogService: DialogService) { }


  createOrEditDto: DataDictionaryCreateOrUpdate = null;
  add() {
    if (this.itemCategoryId == null) {
      alert('请先选中分类');
      return;
    }
    this.dialogService.open(DataDictionaryEditComponent, {
      data: null,
      header: '添加分类',
      width: '70%',
      contentStyle: { "max-height": "700px", "overflow": "auto" },
      baseZIndex: 10000
    }).onClose.subscribe((x: DataDictionaryCreateOrUpdate) => {
      x.categoryId = this.itemCategoryId;
      this.dictionarySrc.BlocDataDictionaryCreate(x).subscribe(x => {
        this.loadCustomers(this.selfEvent);
        this.selectedDataDictionarys = [];

      }, () => {
        alert("key已重复，保存失败");
      });
    });

  }
  edit() {
    if (this.selectedDataDictionarys.length != 1) {
      alert("只能选中一行才能编辑");
      return;
    }
    let obj = this.selectedDataDictionarys[0];
    this.createOrEditDto = obj as DataDictionaryCreateOrUpdate;
    this.dialogService.open(DataDictionaryEditComponent, {
      data: this.createOrEditDto,
      header: '编辑分类',
      width: '70%',
      contentStyle: { "max-height": "700px", "overflow": "auto" },
      baseZIndex: 10000
    }).onClose.subscribe((x: DataDictionaryCreateOrUpdate) => {

      let update = { id: obj.id, input: x } as BlocDataDictionaryService.BlocDataDictionaryUpdateParams;

      this.dictionarySrc.BlocDataDictionaryUpdate(update).subscribe(x => {
        this.loadCustomers(this.selfEvent);
        this.selectedDataDictionarys = [];
      }, () => {
        alert("key已重复，修改失败");
      });

    });
  }
  remove() {
    if (this.selectedDataDictionarys.length <= 0) {
      alert("请选中需要删除的行");
      return;
    }

    this.selectedDataDictionarys.forEach((x: DataDictionaryDto) => {
      this.dictionarySrc.BlocDataDictionaryDelete(x.id).subscribe(x => {

      });
    });
    this.selectedDataDictionarys = [];
    this.loadCustomers(this.selfEvent);
    alert("删除成功");
  }

  loadCustomers(event: LazyLoadEvent) {
    this.selfEvent = event;
    if (this.itemCategoryId == null) {
      return;
    }

    this.loading = true;
    let query = {} as BlocDataDictionaryService.BlocDataDictionaryGetAllDataParams;
    query.skip = event.first;
    query.take = event.rows;
    query.name = this.searchName;
    query.categoryId = this.itemCategoryId;
    this.dictionarySrc.BlocDataDictionaryGetAllData(query).subscribe((res: GetAllDataDto) => {
      this.dataDictionarys = res.data;
      this.totalRecords = res.totalRecords;
      this.loading = false;
    });
  }

  flushData(event) {
    if (event.keyCode == 13) {
      this.loadCustomers(this.selfEvent);
    }
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  nodeClick(x: DataDictionaryTreeDto) {
    this.currentDto = x;
    this.itemCategoryId = x.id;
    this.loadCustomers(this.selfEvent);
    // let query = {} as BlocDataDictionaryService.BlocDataDictionaryGetAllDataParams;
    // query.categoryId = x.id;
    // this.dictionarySrc.BlocDataDictionaryGetAllData(query).subscribe((res: GetAllDataDto) => {
    //   this.dataDictionarys = res.data;
    //   this.totalRecords = res.totalRecords;
    //   this.loading = false;
    // });
  }

  //@TODO:增删改
  Convert(state: number) {
    let str = '';
    switch (state) {
      case 0:
        str = '文本';
        break;
      case 1:
        str = 'URL';
        break;
      case 2:
        str = 'HTML';
        break;
      case 3:
        str = 'JSON';
        break;
      default:
        break;
    }

    return str;
  }

  ngOnInit() {
  }

}
