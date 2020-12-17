import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-guild',
  templateUrl: './detail-guild.component.html',
  styleUrls: ['./detail-guild.component.scss']
})
export class DetailGuildComponent implements OnInit {

  id:string

  constructor(protected router: Router) { }
  ngOnInit() {

    // this.id = this.router.browserUrlTree.queryParamMap.get('id')

  }

}
