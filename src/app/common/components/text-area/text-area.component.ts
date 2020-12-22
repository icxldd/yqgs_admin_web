import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  selfFrom:any;

  @Input() from;
  constructor() {
    
  }

  ngOnInit() {
    this.selfFrom = this.from;
  }

}
