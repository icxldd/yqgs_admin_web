import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  selfFrom:any;

  @Input() from;

  @Input() unitIsNetwork;



  @Output() textClick = new EventEmitter();

  get canClick():boolean{
    return this.textClick.observers.length!=0;
  }
  
  constructor() {
    
  }

  ngOnInit() {
    this.selfFrom = this.from;
  }

}
