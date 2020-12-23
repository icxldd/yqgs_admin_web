import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Player from 'xgplayer'
@Component({
  selector: 'app-mp4-video',
  templateUrl: './mp4-video.component.html',
  styleUrls: ['./mp4-video.component.scss']
})
export class Mp4VideoComponent implements OnInit {

  @Input() url:string;
  constructor() { }
  @ViewChild('video') domLabelChild:ElementRef;
  ngAfterViewInit(){
    let player = new Player({
      el:this.domLabelChild.nativeElement,
      url: this.url,
      autoplay: true,
      fluid: true
  })
  }
  ngOnInit() {
    
  }

}
