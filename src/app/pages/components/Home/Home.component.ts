import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(protected accsrc:AccountService) { 
    this.accsrc.getMyInfo().subscribe(x=>{
      alert(JSON.stringify(x))
      // console.log(x)
    })
  }

  ngOnInit() {
  }

}
