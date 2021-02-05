import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-info-detail',
  templateUrl: './show-info-detail.component.html',
  styleUrls: ['./show-info-detail.component.scss']
})
export class ShowInfoDetailComponent implements OnInit {


  @Input() title:string;
  @Input() subTitle:string;
  @Input() avatarUrl:string;
  @Input() description:string;

  constructor() { }

  ngOnInit() {
  }

}
