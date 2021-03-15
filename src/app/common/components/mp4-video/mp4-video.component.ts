import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Player from 'xgplayer'
import HlsPlayer from 'xgplayer-hls'
import { FileType, FileHelp } from 'app-globaldata'
@Component({
  selector: 'app-mp4-video',
  templateUrl: './mp4-video.component.html',
  styleUrls: ['./mp4-video.component.scss']
})
export class Mp4VideoComponent implements OnInit {

  @Input() url: string;
  constructor() { }
  @ViewChild('video') domLabelChild: ElementRef;
  ngAfterViewInit() {
    this.url = this.url.replace('http:','https:');
    let type: FileType = FileHelp.getFileSuffixName(this.url);
    switch (type) {
      case FileType.hls:
        let playerHls = new HlsPlayer({
          el: this.domLabelChild.nativeElement,
          url: this.url,
          isLive: false,
          autoplay: true,
          fluid: true
        });
        break;
      case FileType.mp4:
        let playerMp4 = new Player({
          el: this.domLabelChild.nativeElement,
          url: this.url,
          autoplay: true,
          fluid: true
        })
        break;
      default:
        break;
    }




  }
  ngOnInit() {

  }

}
