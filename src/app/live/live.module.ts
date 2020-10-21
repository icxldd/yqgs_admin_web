import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live.component';
import { LiveRoutingModule } from './live.routing.module.routing';

@NgModule({
  imports: [
    CommonModule,
    LiveRoutingModule
  ],
  declarations: []
})
export class LiveModule { }
