import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HuiJingComponent } from './hui-jing.component';
import { HuiJingRoutingModule } from './hui-jing.routing.module.routing';

@NgModule({
  imports: [
    CommonModule,
    HuiJingRoutingModule
  ],
  declarations: [HuiJingComponent]
})
export class HuiJingModule { }
