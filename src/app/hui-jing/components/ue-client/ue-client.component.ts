import { Component, OnInit } from '@angular/core';
import { Title, Meta  } from '@angular/platform-browser';
@Component({
  selector: 'app-ue-client',
  templateUrl: './ue-client.component.html',
  styleUrls: ['./ue-client.component.css']
})
export class UeClientComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle("UE4家装设计客户端");
   }

  ngOnInit() {
  }

}
