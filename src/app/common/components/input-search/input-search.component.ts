import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  @Input() inputType:InputSearchType;

  @Input() lableText:string;
  @Input() suffixLable:string;

  @Output() inputEvent = new EventEmitter();

  onInput(event){
    this.inputEvent.emit(event.value);
  }


  value:any;


  get isNumber(){
    switch (this.inputType) {
      case InputSearchType.number:
        return true;
      case InputSearchType.string:
        return false;
      default:
        return false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

export enum InputSearchType{
    string,
    number
}
