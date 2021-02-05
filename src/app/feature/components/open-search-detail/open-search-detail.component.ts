import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { AccountService } from 'src/app/pages/services/account.service';

@Component({
  selector: 'app-open-search-detail',
  templateUrl: './open-search-detail.component.html',
  styleUrls: ['./open-search-detail.component.scss']
})
export class OpenSearchDetailComponent implements OnInit {

  guildId:number;
  userId:number;
  displayBasic:boolean = true;

  @Output() onSearchEnter = new EventEmitter<any>();
  constructor() { }


  onKeyupEnterSearch(type){
    //教会搜索
    if(type==1){
      this.onSearchEnter.emit({type:1,data:this.guildId});
    }
    //用户搜索
    else if(type==2){
      this.onSearchEnter.emit({type:2,data:this.userId});
    }
  }
  ngOnInit() {
  
  }

}
