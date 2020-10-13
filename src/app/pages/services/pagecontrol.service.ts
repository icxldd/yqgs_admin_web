import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PagecontrolService {

constructor(protected router: Router) { }


gotopage(url:string){
  this.router.navigate([url]);
}

}
