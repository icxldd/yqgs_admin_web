import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rich-html',
  templateUrl: './rich-html.component.html',
  styleUrls: ['./rich-html.component.scss']
})
export class RichHtmlComponent implements OnInit {


  @Input() content:string;
  constructor() { }

  ngOnInit() {
  }

}
