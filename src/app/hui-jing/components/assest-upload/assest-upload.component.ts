import { Component, OnInit } from '@angular/core';
import { Title, Meta  } from '@angular/platform-browser';
@Component({
  selector: 'app-assest-upload',
  templateUrl: './assest-upload.component.html',
  styleUrls: ['./assest-upload.component.css']
})
export class AssestUploadComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle("资源上传器");
   }


  ngOnInit() {
  }

}
