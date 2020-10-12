import { Component, OnInit } from '@angular/core';
import { Title, Meta  } from '@angular/platform-browser';
@Component({
  selector: 'app-ue-server',
  templateUrl: './ue-server.component.html',
  styleUrls: ['./ue-server.component.css']
})
export class UeServerComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle("UE4家装设计后台管理");
   }

  ngOnInit() {
  }

}
