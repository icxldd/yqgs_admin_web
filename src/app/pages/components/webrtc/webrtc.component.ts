import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BasicService } from '../../services/basic.service';


class inputObj{
  name:string
  code:string
}

@Component({
  selector: 'app-webrtc',
  templateUrl: './webrtc.component.html',
  styleUrls: ['./webrtc.component.scss']
})
export class WebrtcComponent implements OnInit {
  deviceInfos:string[]=[]
  audioSource:inputObj[]=[]
  audioOutput:inputObj[]=[]
  videoSource:inputObj[]=[]

  selectAudioSource:inputObj
  selectAudioOutput:inputObj
  selectVideoSource:inputObj

  after$= new Subject<void>();
  constructor(private basic:BasicService) {
   

   }

  ngOnInit() {
  
  }
  ngAfterViewInit(){
    this.basic.print(this.isSupportWebrtc)
    this.devicesShow();
  }

  printDevices(){
    this.basic.print(this.audioSource);
    this.basic.print(this.audioOutput)
    this.basic.print(this.videoSource)
  }
  devicesShow(){
    navigator.mediaDevices.enumerateDevices()
		.then(x=>{
      x.map(deviceInfo=>{
    
        let obj:inputObj={name:deviceInfo.label==''?'默认':deviceInfo.label,code:deviceInfo.deviceId};
        if(deviceInfo.kind === 'audioinput'){
          this.audioSource.push(obj);
        }else if(deviceInfo.kind === 'audiooutput'){
          this.audioOutput.push(obj);
        }else if(deviceInfo.kind === 'videoinput'){
          this.videoSource.push(obj);
        }
        
      })
      

      this.printDevices();
      // this.basic.print(x);
    })
    .catch(x=>{});
    
  }




  get isSupportWebrtc():boolean
  {
      return !(!navigator.mediaDevices ||
        !navigator.mediaDevices.enumerateDevices);
  }
  
}
