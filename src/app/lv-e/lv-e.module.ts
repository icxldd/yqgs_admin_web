import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LvEComponent } from './lv-e.component';
import { LveRoutingModule } from './lv-e.routing.module.routing';

@NgModule({
  imports: [
    CommonModule,
    LveRoutingModule
  ],
  declarations: [LvEComponent]
})
export class LvEModule { }
