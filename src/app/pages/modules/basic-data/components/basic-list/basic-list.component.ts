import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { CreateTreeDto, DataDictionaryTreeDto, UpdateInputTree } from '@app/api/ddd-api/models';
import { BlocDataDictionaryTreeService } from '@app/api/ddd-api/services';
import { DialogService } from 'primeng/dynamicdialog';
import { DataCategoreTreeDto } from '../../models/data-categore-tree-dto';
import { BasicListAddEditComponent } from '../basic-list-add-edit/basic-list-add-edit.component';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {



  //当前level
  @Input() currentLevel: number;
  //当前选中dto
  @Input() currentSelectDto: DataDictionaryTreeDto;;
  //当前数据数组
  @Input() data: DataDictionaryTreeDto[];
  //书节点点击
  @Output() TreeClick = new EventEmitter<DataDictionaryTreeDto>();

  @Output() removeClick = new EventEmitter<DataDictionaryTreeDto>();


  constructor(private dictionaryTreeSrc: BlocDataDictionaryTreeService, protected dialogService: DialogService) { }


  ngOnInit() {

  }
  treeClick(event,dto: DataDictionaryTreeDto) {
    this.TreeClick.emit(dto);
    event.stopPropagation();
  }

  doubleClick(dto: DataDictionaryTreeDto) {
    this.dialogService.open(BasicListAddEditComponent, {
      data: dto,
      header: '编辑分类',
      width: '70%',
      contentStyle: { "max-height": "700px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }

  checkSelected() {
    if (!this.currentSelectDto || this.currentSelectDto.level != this.currentLevel) {
      return false;
    } else {
      return true;
    }
  }

  addChild2(parentId) {
    this.dialogService.open(BasicListAddEditComponent, {
      data: { parentId: parentId } as DataDictionaryTreeDto,
      header: '添加分类',
      width: '70%',
      contentStyle: { "max-height": "700px", "overflow": "auto" },
      baseZIndex: 10000
    }).onClose.subscribe((x: DataDictionaryTreeDto) => {

      if (this.currentSelectDto) {
        let index = this.data.findIndex(x => x.id == this.currentSelectDto.id);
        if (!this.data[index].children) {
          this.data[index].children = [];
        }
        this.data[index].children.push(x);


      }
      else {
        this.data.push(x);
      }

      this.TreeClick.emit(this.currentSelectDto);
    });
  }

  addChild() {
    if (this.checkSelected() || (this.currentLevel == 1 && this.currentSelectDto == null)) {
      let parentId = this.currentSelectDto == null ? null : this.currentSelectDto.id;
      if (parentId == null) {
        this.addChild2(null);
      }
      this.dictionaryTreeSrc.BlocDataDictionaryTreeGet(this.currentSelectDto.id).subscribe(x => {
        this.addChild2(parentId);
      }, (x) => {
        this.addChild2(null);
      });
    } else {
      this.alert_('请先选中需要操作的正确节点');
      return;
    }
  }
  alert_(str) {
    alert(str);
  }
  removeChild_() {
    if (this.checkSelected()) {
      this.dictionaryTreeSrc.BlocDataDictionaryTreeDelete(this.currentSelectDto.id).subscribe(x => {
        let index = this.data.findIndex(x => x.id == this.currentSelectDto.id);
        this.data.splice(index, 1);
        this.removeClick.emit(this.currentSelectDto);
      });
    } else {
      this.alert_('请先选中需要操作的正确节点');
      return;
    }
  }
  swagArrars(arrs, i, b) {
    let val = arrs[i];
    arrs[i] = arrs[b];
    arrs[b] = val;
  }
  upChild() {
    if (this.checkSelected()) {
      let index = this.data.findIndex(x => x.id == this.currentSelectDto.id);
      if (index == 0) {
        return;
      }
      this.dictionaryTreeSrc.BlocDataDictionaryTreeMoveUp(this.currentSelectDto).subscribe(
        x => {
          this.swagArrars(this.data, index, index - 1);
        }
      );
    } else {
      this.alert_('请先选中需要操作的正确节点');
      return;
    }
  }

  downChild() {
    if (this.checkSelected()) {
      let index = this.data.findIndex(x => x.id == this.currentSelectDto.id);
      if (index == this.data.length - 1) {
        return;
      }

      this.dictionaryTreeSrc.BlocDataDictionaryTreeMoveDown(this.currentSelectDto).subscribe(
        x => {
          this.swagArrars(this.data, index, index + 1);
        }
      );
    } else {
      this.alert_('请先选中需要操作的正确节点');
      return;
    }
  }


  @HostListener('window:click', ['$event'])
  onWindowClick(event: any) {
      // this.currentSelectDto = null;
  }
}
