import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuiKangComponent } from './rui-kang.component';
import { RuiKangRoutingModule } from './rui-kang.routing.module.routing';

@NgModule({
  imports: [
    CommonModule,
    RuiKangRoutingModule
  ],
  declarations: [RuiKangComponent]
})
export class RuiKangModule { }
