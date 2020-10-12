import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  ccc: string;

  constructor() { }

  ngOnInit() {
  }
  onkeydown(){
    console.log(this.ccc);
  }
}
