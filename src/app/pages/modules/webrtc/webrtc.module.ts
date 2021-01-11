import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebrtcComponent } from './webrtc.component';
import { WebrtcRoutingModule } from './webrtc.routing';

@NgModule({
  imports: [
    CommonModule,
    WebrtcRoutingModule
  ],
  declarations: [WebrtcComponent]
})
export class WebrtcModule { }
