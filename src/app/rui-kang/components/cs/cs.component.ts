import { Component, OnInit } from '@angular/core';
import { Title, Meta  } from '@angular/platform-browser';
@Component({
  selector: 'app-cs',
  templateUrl: './cs.component.html',
  styleUrls: ['./cs.component.css']
})
export class CsComponent implements OnInit {

  constructor(private titleService: Title) { 
    titleService.setTitle("EWMS C/S");
  }

  ngOnInit() {
  }

}
