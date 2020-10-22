import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { liveDto } from './dto/live';
import videojs from 'video.js'
import Player from 'xgplayer'
import HlsPlayer from 'xgplayer-hls'
import { LiveService } from './services/live.service';

// import 'videojs-contrib-hls'

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit,AfterViewInit {

  liveId:string
  safeUrl: any;
  live: liveDto
  constructor(private route: ActivatedRoute,private liveSrc:LiveService) {


   }
  ngAfterViewInit(): void {

    this.route.queryParams.subscribe(p => {
      this.liveId = p.liveId
      this.liveSrc.getLiveInfo(this.liveId).then(t=>{
        t.subscribe((x:any)=>{
          this.live.guildName=x.livecast.guild.displayName
          this.live.pastorName = x.livecast.creator.displayName
          this.live.liveTitle = x.livecast.title
          this.live.pullSteamAdress = x.livecast.hlsPlayUrl
           
          let player = new HlsPlayer({
           id: 'my-video',
           url: this.live.pullSteamAdress,
           isLive: true,
           autoplay: true,
           closeVideoClick:true,
           closeVideoTouch:true,
           'x5-video-player-fullscreen':true,
           ignores: ['time','progress','play','replay'],
           playsinline: true,
           height: window.innerHeight-64,
           width: window.innerWidth
       });
         })
      })
    })
  }

  ngOnInit() {
    this.live = new liveDto()
    this.live.guildName='羊群公社'
    this.live.liveTitle='开心'
    this.live.pastorName='icxl'

  
    
    
  }


}
