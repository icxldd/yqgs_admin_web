import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { PagecontrolService } from 'src/app/pages/services/pagecontrol.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  roomId:string;
  name:string;

  
  constructor(public router:Router) { }


  joinRoom(){
    this.router.navigate(['/pages/webrtc/room/'],{queryParams:{roomId:this.roomId,name:this.name}});
    // this.page.gotopage(`/pages/webrtc/room?roomId=${this.roomId}&name=${this.name}`);
  }
  ngOnInit() {

  }

}
