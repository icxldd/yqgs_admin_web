import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.component.html',
  styleUrls: ['./export-excel.component.scss']
})
export class ExportExcelComponent implements OnInit {
  display:boolean = false;
  isLeftMove:boolean = false;
  @Input() page: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }



  clickSwitch(){
    if(this.display){
      this.isLeftMove = false;
    }else{
      this.isLeftMove = true;
    }
    this.display = !this.display;
  }
}
