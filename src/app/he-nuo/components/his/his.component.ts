import { Component, OnInit } from '@angular/core';
import { Title, Meta  } from '@angular/platform-browser';
@Component({
  selector: 'app-his',
  templateUrl: './his.component.html',
  styleUrls: ['./his.component.css']
})
export class HisComponent implements OnInit {

  constructor(private titleService: Title) { 
    titleService.setTitle("His医疗管理");
  }

  ngOnInit() {
  }

}
