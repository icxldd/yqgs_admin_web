import { Component, HostListener, OnInit } from '@angular/core';
import { DataDictionaryTreeDto } from '@app/api/ddd-api/models';
import { BlocDataDictionaryTreeService } from '@app/api/ddd-api/services';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-data-category-tree',
  templateUrl: './data-category-tree.component.html',
  styleUrls: ['./data-category-tree.component.scss']
})
export class DataCategoryTreeComponent implements OnInit {

  constructor(private dictionaryTreeSrc: BlocDataDictionaryTreeService) { }
  ngOnInit() {
    this.dictionaryTreeSrc.BlocDataDictionaryTreeGetTrees(null).subscribe(x => {
      this.currentDataSource = x;
    });

  }

  currentDataSource: DataDictionaryTreeDto[];

  currentSelectDto: DataDictionaryTreeDto;

  childrenTrees: DataDictionaryTreeDto[][] = [];
  flatten(arr) { return [].concat(...arr.map(x => Array.isArray(x) ? this.flatten(x) : x)) }

  removeClick(dto: DataDictionaryTreeDto) {
    let level = dto.level;
    if (level == 1) {
      this.childrenTrees = [];
    }
    else {
      this.childrenTrees.length = level - 1;
    }
  }
  TreeClick(dto: DataDictionaryTreeDto) {
    let currentLevel = dto.level;
    let saveLayer = currentLevel - 1;
    this.childrenTrees.length = saveLayer;

    this.currentSelectDto = dto;
    if (!this.currentSelectDto.children) {
      return;
    } else {
      var arr2: DataDictionaryTreeDto[] = this.flatten(this.childrenTrees);
      if (!arr2.find(x => x.id == this.currentSelectDto.children[0].id)) {
        this.childrenTrees.push(this.currentSelectDto.children);
      }
    }
  }

}
