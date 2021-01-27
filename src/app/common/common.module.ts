import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './common.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BasicAreaComponent } from './components/basic-area/basic-area.component';
import { MultiAreaComponent } from './components/multi-area/multi-area.component';
import { HlsVideoComponent } from './components/hls-video/hls-video.component';
import { Mp4VideoComponent } from './components/mp4-video/mp4-video.component';
import { NetworkUnitPipe } from '../pipe/network-unit.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NetworkUnitPipe,CommonComponent,TextAreaComponent,PieChartComponent,BasicAreaComponent,MultiAreaComponent,HlsVideoComponent,Mp4VideoComponent],
  exports:[TextAreaComponent,PieChartComponent,BasicAreaComponent,MultiAreaComponent,HlsVideoComponent,Mp4VideoComponent]
})
export class CommonmModule { }
