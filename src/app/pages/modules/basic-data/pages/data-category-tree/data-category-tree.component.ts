import { Component, OnInit } from '@angular/core';
import { BlocDataDictionaryTreeService } from '@app/api/ddd-api/services';

@Component({
  selector: 'app-data-category-tree',
  templateUrl: './data-category-tree.component.html',
  styleUrls: ['./data-category-tree.component.scss']
})
export class DataCategoryTreeComponent implements OnInit {

  constructor(private dictionaryTreeSrc:BlocDataDictionaryTreeService) { }

  ngOnInit() {
    this.dictionaryTreeSrc.BlocDataDictionaryTreeGetTrees().subscribe(x=>{
      console.log(x);
    });
  }

}
