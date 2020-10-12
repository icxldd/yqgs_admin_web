import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZiDieComponent } from './zi-die.component';
import { zidieRoutingModule } from './zi-die-routing.module.routing';

@NgModule({
  imports: [
    CommonModule,
    zidieRoutingModule
  ],
  declarations: [ZiDieComponent]
})
export class ZiDieModule { }
