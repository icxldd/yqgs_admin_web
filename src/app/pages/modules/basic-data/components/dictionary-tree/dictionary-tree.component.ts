import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataDictionaryTreeDto } from '@app/api/ddd-api/models';
import { BlocDataDictionaryTreeService } from '@app/api/ddd-api/services';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-dictionary-tree',
  templateUrl: './dictionary-tree.component.html',
  styleUrls: ['./dictionary-tree.component.scss']
})
export class DictionaryTreeComponent implements OnInit {



  @Output() nodeClick= new EventEmitter<DataDictionaryTreeDto>();
  files1: TreeNode<DataDictionaryTreeDto>[] = [];
  constructor(private dictionaryTreeSrc: BlocDataDictionaryTreeService) { }

  nodeSelect(event) {
    this.nodeClick.emit(event.node.data);
  }

  BuilderTreeDto(dto: DataDictionaryTreeDto): TreeNode<DataDictionaryTreeDto> {
    let _obj = {} as TreeNode<DataDictionaryTreeDto>;
    _obj.data = dto;
    _obj.expanded = true;
    _obj.label = dto.name;
    if (dto.children) {
      _obj.collapsedIcon = "pi pi-folder";
      _obj.expandedIcon = "pi pi-folder-open";

      let arrs = [] as TreeNode<DataDictionaryTreeDto>[];
      dto.children.forEach(x => {
        arrs.push(this.BuilderTreeDto(x));
      });
      _obj.children = arrs;
    }
    return _obj;
  }

  ConvertDto(x: DataDictionaryTreeDto[]): TreeNode<DataDictionaryTreeDto>[] {
    let ret: TreeNode<DataDictionaryTreeDto>[] = [];
    x.forEach(element => {
      let currentDto = this.BuilderTreeDto(element);
      ret.push(currentDto);
    });
    return ret;
  }

  ngOnInit() {
    this.dictionaryTreeSrc.BlocDataDictionaryTreeGetTrees(null).subscribe((x: DataDictionaryTreeDto[]) => {
      this.files1 = this.ConvertDto(x);
      // this.files1 = JSON.parse('[{\"label\":\"Documents\",\"data\":\"Documents Folder\",\"expandedIcon\":\"pi pi-folder-open\",\"collapsedIcon\":\"pi pi-folder\",\"children\":[{\"label\":\"Work\",\"data\":\"Work Folder\",\"expandedIcon\":\"pi pi-folder-open\",\"collapsedIcon\":\"pi pi-folder\",\"children\":[{\"label\":\"Expenses.doc\",\"icon\":\"pi pi-file\",\"data\":\"Expenses Document\"},{\"label\":\"Resume.doc\",\"icon\":\"pi pi-file\",\"data\":\"Resume Document\"}]},{\"label\":\"Home\",\"data\":\"Home Folder\",\"expandedIcon\":\"pi pi-folder-open\",\"collapsedIcon\":\"pi pi-folder\",\"children\":[{\"label\":\"Invoices.txt\",\"icon\":\"pi pi-file\",\"data\":\"Invoices for this month\"}]}]},{\"label\":\"Pictures\",\"data\":\"Pictures Folder\",\"expandedIcon\":\"pi pi-folder-open\",\"collapsedIcon\":\"pi pi-folder\",\"children\":[{\"label\":\"barcelona.jpg\",\"icon\":\"pi pi-image\",\"data\":\"Barcelona Photo\"},{\"label\":\"logo.jpg\",\"icon\":\"pi pi-image\",\"data\":\"PrimeFaces Logo\"},{\"label\":\"primeui.png\",\"icon\":\"pi pi-image\",\"data\":\"PrimeUI Logo\"}]},{\"label\":\"Movies\",\"data\":\"Movies Folder\",\"expandedIcon\":\"pi pi-folder-open\",\"collapsedIcon\":\"pi pi-folder\",\"children\":[{\"label\":\"Al Pacino\",\"data\":\"Pacino Movies\",\"children\":[{\"label\":\"Scarface\",\"icon\":\"pi pi-video\",\"data\":\"Scarface Movie\"},{\"label\":\"Serpico\",\"icon\":\"pi pi-video\",\"data\":\"Serpico Movie\"}]},{\"label\":\"Robert De Niro\",\"data\":\"De Niro Movies\",\"children\":[{\"label\":\"Goodfellas\",\"icon\":\"pi pi-video\",\"data\":\"Goodfellas Movie\"},{\"label\":\"Untouchables\",\"icon\":\"pi pi-video\",\"data\":\"Untouchables Movie\"}]}]}]') as TreeNode[];     
      // console.log(this.files1);
    });
  }

}
