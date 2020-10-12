import { Component, OnInit } from '@angular/core';
import { Title, Meta  } from '@angular/platform-browser';
@Component({
  selector: 'app-guanwang',
  templateUrl: './guanwang.component.html',
  styleUrls: ['./guanwang.component.css']
})
export class GuanwangComponent implements OnInit {

  constructor(private titleService: Title) { 
    titleService.setTitle("绿萼科技官网");
  }

  ngOnInit() {
  }

}
