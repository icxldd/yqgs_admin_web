import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeNuoComponent } from './he-nuo.component';
import {henuoRoutingModule} from './he-nuo-routing.routing.module';
@NgModule({
  imports: [
    CommonModule,
    henuoRoutingModule,
  ],
  declarations: [HeNuoComponent]
})
export class HeNuoModule { }
