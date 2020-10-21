import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { liveDto } from './dto/live';
import videojs from 'video.js'
import Player from 'xgplayer'
import HlsPlayer from 'xgplayer-hls'

// import 'videojs-contrib-hls'

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit,AfterViewInit {

  liveId:string
  url = 'http://livecast.yangqungongshe.com/live/0307819739d44ea083c004dac8b0155f.m3u8'; 
  safeUrl: any;
  live: liveDto
  constructor(private route: ActivatedRoute,private elementRef: ElementRef) {


   }
  ngAfterViewInit(): void {

    let player = new HlsPlayer({
      id: 'my-video',
      url: this.url,
      isLive: true,
      autoplay: true,
      closeVideoClick:true,
      ignores: ['time','progress','play','replay'],
      playsinline: false,
      height: window.innerHeight,
      width: window.innerWidth
  });


  }

  ngOnInit() {
    this.live = new liveDto()
    this.live.guildName='羊群公社'
    this.live.liveTitle='开心'
    this.live.pastorName='icxl'

    this.route.queryParams.subscribe(p => {
      this.liveId = p.liveId
    })
    
    
  }


}
