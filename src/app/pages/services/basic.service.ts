import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

constructor() { }


  print(obj:any){
  console.log(JSON.stringify(obj))
  }
}
