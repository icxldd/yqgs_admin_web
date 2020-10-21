import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { liveDto } from './dto/live';
import videojs from 'video.js'
// import 'videojs-contrib-hls'

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit,AfterViewInit {

  liveId:string
  url = 'http://livecast.yangqungongshe.com/live/283e7b855bb841088a4ba105c40d16ba.m3u8'; 
  safeUrl: any;
  live: liveDto
  constructor(private route: ActivatedRoute,private elementRef: ElementRef) {


   }
  ngAfterViewInit(): void {
    var player = videojs('my-video', {"autoplay":true,});
    player.play();
    // var video = document.getElementById('video');
    // var videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
    // //
    // // First check for native browser HLS support
    // //
    // if (video.canPlayType('application/vnd.apple.mpegurl')) {
    //   video.src = videoSrc;
    //   video.addEventListener('loadedmetadata', function() {
    //     video.play();
    //   });
    // //
    // // If no native HLS support, check if hls.js is supported
    // //
    // } else if (Hls.isSupported()) {
    //   var hls = new Hls();
    //   hls.loadSource(videoSrc);
    //   hls.attachMedia(video);
    //   hls.on(Hls.Events.MANIFEST_PARSED, function() {
    //     video.play();
    //   });
    // }

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
