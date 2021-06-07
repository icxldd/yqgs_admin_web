import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataDictionaryDto, DataDictionaryTreeDto } from '@app/api/ddd-api/models';
import { GetAllDataDto } from '@app/api/ddd-api/models/get-all-data-dto';
import { BlocDataDictionaryService, BlocDataDictionaryTreeService } from '@app/api/ddd-api/services';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-data-dictionary',
  templateUrl: './data-dictionary.component.html',
  styleUrls: ['./data-dictionary.component.scss']
})
export class DataDictionaryComponent implements OnInit {

  public get name(): string {
    return this.currentDto ? this.currentDto.name : '全部';
  }

  showProgress: boolean = false;
  currentDto: DataDictionaryTreeDto;
  dataDictionarys: DataDictionaryDto[];

  totalRecords: number;
  cols: any[];
  loading: boolean;
  selfEvent: LazyLoadEvent;
  searchName: string;
  constructor(private dictionaryTreeSrc: BlocDataDictionaryTreeService, private dictionarySrc: BlocDataDictionaryService, private ref: ChangeDetectorRef) { }


  loadCustomers(event: LazyLoadEvent) {
    this.selfEvent = event;
    this.loading = true;
    let query = {} as BlocDataDictionaryService.BlocDataDictionaryGetAllDataParams;
    query.skip = event.first;
    query.take = event.rows;
    query.name = this.searchName;
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

    let query = {} as BlocDataDictionaryService.BlocDataDictionaryGetAllDataParams;
    query.categoryId = x.id;
    this.dictionarySrc.BlocDataDictionaryGetAllData(query).subscribe((res: GetAllDataDto) => {
      this.dataDictionarys = res.data;
      this.totalRecords = res.totalRecords;
      this.loading = false;
    });
  }


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
