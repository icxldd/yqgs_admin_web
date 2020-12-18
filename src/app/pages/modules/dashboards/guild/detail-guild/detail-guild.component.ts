import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {skip, takeUntil, switchMap ,concatMap,tap,map,debounceTime,distinctUntilChanged, distinct, auditTime	 } from 'rxjs/operators'
import {
  BehaviorSubject, Observable, Subject, merge,concat,of,from,Subscription,forkJoin, ReplaySubject	 
}from 'rxjs'
import { asyncScheduler } from 'rxjs';
import { GuildDto } from '../../../dtos/dashboards';
import { random } from 'lodash';

@Component({
  selector: 'app-detail-guild',
  templateUrl: './detail-guild.component.html',
  styleUrls: ['./detail-guild.component.scss']
})
export class DetailGuildComponent implements OnInit {

  id:string
  fristWatcher: Subscription;
  fristSubject = new Subject<string>()
  repalysubject =new  ReplaySubject<string>();
  fristBehaviorSubject = new BehaviorSubject<string>(null);
  frist2BehaviorSubject = new BehaviorSubject<GuildDto>(this.buildGuildDto('123',1)[0]);
  fristObservable: Observable<any>
  destroy$: Subject<boolean> = new Subject();
  
  ngOnDestroy(): void {
    console.log('销毁')
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.repalysubject.next('123123');
  }//ngOnDestroy

  constructor(public router: ActivatedRoute) { }

  buildGuildDto(identifying:string,count:number):GuildDto[]{

   let robjs:GuildDto[] = [];
    for (let index = 0; index <count; index++) {
      let robj:GuildDto  = new GuildDto();
      robj.guildId = identifying;
      robj.displayName = random(10000)+identifying+"name";
      // robj.displayName = identifying+"name";
      robjs[index] = robj;
    }
    
    return robjs
  }
  ngOnInit() {
    // this.id = this.router.snapshot.data.guildObj;
    // this.id = this.router.browserUrlTree.queryParamMap.get('id')

    // this.Tof()
    // this.TFrom()
    //顺序增加
    // this.TConcat()
    //倒序增加
    // this.Tmerge()
    // this.fristSubject.subscribe(x=>{
    //   this.fristObservable = of(x,30,20)
      
    //   console.log("fristSubject"+x)

    //   this.fristObservable.subscribe((x)=>{
    //     console.log("fristObservable"+x)
    //   })
    // })
    // this.fristSubject.next('id')
    
// this.repalysubject.next('1')
// this.repalysubject.next('2')

// this.frist2BehaviorSubject.pipe(distinctUntilChanged((x,y)=>{
// return true;
// // if(x.displayName===y.displayName){
// //   return true;
// // }else{
// //   return false;
// // }
// })).subscribe(x=>{
//   console.log(x)
// })

// this.frist2BehaviorSubject.pipe(distinct(x=>x.guildId)).subscribe(x=>{
//     console.log(x)
//   })

// this.frist2BehaviorSubject.pipe(switchMap((x)=>{
//   x.guildId = 1+"";
//   return of(x);
// })).subscribe(x=>{
//     console.log(x)
//   })
// this.frist2BehaviorSubject.pipe(concatMap((x)=>{
//   x.guildId = 1+"";
//   return of(x);
// })).subscribe(x=>{
//     console.log(x)
//   })


// let ccc = this.buildGuildDto('icxl',10)

// ccc.forEach(x=>{
//   this.frist2BehaviorSubject.next(x)
// })




//  this.repalysubject.pipe(takeUntil(this.destroy$)).pipe(concatMap(val=>{
//   return of(val+'123')

//  })).subscribe(x=>{
//   console.log(x)
// })

// this.repalysubject.subscribe(x=>{
//   console.log(x)
// })

//  this.fristWatcher =    this.fristBehaviorSubject.subscribe(x=>{
//       console.log(x)
//     })
//     this.fristWatcher.unsubscribe()
//     this.fristBehaviorSubject.next('123123')

  //   forkJoin(this.Rof(), this.RFrom()).subscribe(vl => {
  //     console.log(vl)
  //     // let rootNodeName = vl[0];
  //     // let unCategoryName = vl[1];
  //     // console.log(rootNodeName,unCategoryName)
  // });
    
  // this.testoperators()

  }

  testoperators(){

    // skip
    this.Rof().pipe(skip(1)).subscribe(x=>{
      console.log(x)
    })

    // tap

    of(1).pipe(tap(x=>{
      x = x*10
      console.log(x)
    })).subscribe(x=>{
      console.log(x)
    })


    this.Rof().pipe(map(x=>{

      let xx = x*10
      console.log(xx)
      return xx
    })).subscribe(
      x=>{
        console.log(x)
      }
    )
  }

  Rof(): Observable<any>{
    return  of(1,2,3,4)
  }
  Tof(){
    this.Rof().subscribe(
      next => console.log('next:', next),
      err => console.log('error:', err),
      () => console.log('the end'),
    );
  }

  RFrom(): Observable<any>{
    return from([10, 20, 30], asyncScheduler)
  }
  TFrom(){
    this.RFrom().subscribe(
      next => console.log('next:', next),
      err => console.log('error:', err),
      () => console.log('the end'),
    );
  }

  RConcat(): Observable<any>{
    return concat( this.RFrom(),this.Rof())
  }
  TConcat(){
    this.RConcat().subscribe(
      next => console.log('next:', next),
      err => console.log('error:', err),
      () => console.log('the end'),
    );
  }

  Rmerge(): Observable<any>{
    return merge(this.RFrom(),this.Rof())
  }
  Tmerge(){
    this.Rmerge().subscribe(
      next => console.log('next:', next),
      err => console.log('error:', err),
      () => console.log('the end'),
    );
  }

 

}
