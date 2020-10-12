import { Component, OnInit } from '@angular/core';
import { Title, Meta  } from '@angular/platform-browser';
@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title) { 
    titleService.setTitle("EWMS APP");
  }

  ngOnInit() {
  }

}
