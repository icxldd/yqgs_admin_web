import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {skip, takeUntil, switchMap ,concatMap,tap,map,debounceTime,distinctUntilChanged	 } from 'rxjs/operators'
import {
  BehaviorSubject, Observable, Subject, merge,concat,of,from,Subscription,forkJoin	 
}from 'rxjs'

@Component({
  selector: 'app-detail-guild',
  templateUrl: './detail-guild.component.html',
  styleUrls: ['./detail-guild.component.scss']
})
export class DetailGuildComponent implements OnInit {

  id:string

  constructor(public router: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.router.snapshot.data.guildObj;
    // this.id = this.router.browserUrlTree.queryParamMap.get('id')

  }

}
