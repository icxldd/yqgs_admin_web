import { Component, OnInit } from '@angular/core';
import { Title, Meta  } from '@angular/platform-browser';
@Component({
  selector: 'app-sili',
  templateUrl: './sili.component.html',
  styleUrls: ['./sili.component.css']
})
export class SiliComponent implements OnInit {

  constructor(private titleService: Title) { 
    titleService.setTitle("思励英语教育");
  }

  ngOnInit() {
  }

}
