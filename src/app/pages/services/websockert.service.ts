import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class WebsockertService {
  ws: WebSocket
  onopen$= new Subject<any>();
  onmessage$= new Subject<any>();
  onerror$= new Subject<any>();
  onclose$= new Subject<any>();
  constructor() { }

  createObservableSocket(token:string,url: string='ws://localhost:8181'): Observable<any>{
    if(this.ws!=undefined){  
      this.ws.close()
    }
    this.ws = new WebSocket(url+"?X-ss-pid="+token)
    this.ws.onmessage = (event) => this.onmessage$.next(event)
    this.ws.onerror = (event) => this.onerror$.next(event)
    this.ws.onclose = (event) => this.onclose$.next(event)
    return new Observable(
      observer => {
        this.ws.onopen = (event) => observer.next(event)
      })
  }
}
