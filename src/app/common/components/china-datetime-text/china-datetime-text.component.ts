import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-china-datetime-text',
  templateUrl: './china-datetime-text.component.html',
  styleUrls: ['./china-datetime-text.component.scss']
})
export class ChinaDatetimeTextComponent implements OnInit {

  //时间值
  @Input() value:string;
  @Input() prefixName:string; 
  @Input() textColor:string = '#000';

  constructor() { }

  ngOnInit() {
  }

}
