import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './common.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BasicAreaComponent } from './components/basic-area/basic-area.component';
import { MultiAreaComponent } from './components/multi-area/multi-area.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommonComponent,TextAreaComponent,PieChartComponent,BasicAreaComponent,MultiAreaComponent],
  exports:[TextAreaComponent,PieChartComponent,BasicAreaComponent,MultiAreaComponent]
})
export class CommonmModule { }
