import { Component, OnInit } from '@angular/core';
import { Title, Meta  } from '@angular/platform-browser';
@Component({
  selector: 'app-assest-download',
  templateUrl: './assest-download.component.html',
  styleUrls: ['./assest-download.component.css']
})
export class AssestDownloadComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle("资源下载器");
   }

  ngOnInit() {
  }

}
