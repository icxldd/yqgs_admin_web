import { Component, OnInit } from '@angular/core';
import { Title, Meta  } from '@angular/platform-browser';
@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.css']
})
export class GisComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle("医用气体运行管理系统");
   }

  ngOnInit() {
  }

}
