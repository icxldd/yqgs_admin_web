import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataDictionaryTreeDto } from '@app/api/ddd-api/models';
import { BlocDataDictionaryTreeService } from '@app/api/ddd-api/services';
import { DataCategoreTreeDto } from '../../models/data-categore-tree-dto';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {

  
  @Input() currentSelectDto:DataDictionaryTreeDto;;
  @Input() data:DataDictionaryTreeDto[];
  @Output() TreeClick = new EventEmitter<DataDictionaryTreeDto>();
  constructor(private dictionaryTreeSrc:BlocDataDictionaryTreeService) { }
  
  
  ngOnInit() {
   
  }
  treeClick(dto:DataDictionaryTreeDto){
    this.TreeClick.emit(dto);
  }
}
