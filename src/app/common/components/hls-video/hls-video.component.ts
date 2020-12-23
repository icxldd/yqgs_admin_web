import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import HlsPlayer from 'xgplayer-hls'
@Component({
  selector: 'app-hls-video',
  templateUrl: './hls-video.component.html',
  styleUrls: ['./hls-video.component.scss']
})
export class HlsVideoComponent implements OnInit {

  @Input() url:string;
  constructor() { }
  ngOnInit(): void {
  }
  @ViewChild('video') domLabelChild:ElementRef;
  ngAfterViewInit() {
  


  let player = new HlsPlayer({
    el:this.domLabelChild.nativeElement,
    url: this.url,
    isLive: true,
    autoplay: true,
    closeVideoClick:true,
    closeVideoTouch:true,
    'x5-video-player-fullscreen':true,
    ignores: ['time','progress','play','replay'],
    playsinline: true,
   fluid: true
});
  }

}
