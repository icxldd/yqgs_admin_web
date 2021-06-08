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
import { ChinaDatetimeTextComponent } from './components/china-datetime-text/china-datetime-text.component';
import { ShowTimePipe } from '@app/pages/modules/pipes/show-time.pipe';
import { TooltipModule } from 'primeng/tooltip';
import { ChinaTimePipe } from '@app/pages/modules/pipes/china-time.pipe';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LiveModule } from '@app/live/live.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PanelModule } from 'primeng/panel';
import { ManualReviewModule } from '@app/pages/modules/manual-review/manual-review.module';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { WebrtcModule } from '@app/pages/modules/webrtc/webrtc.module';
import { SidebarModule } from 'primeng/sidebar';
import { FeatureModule } from '@app/feature/feature.module';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';

import {TreeModule} from 'primeng/tree';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MatCardModule } from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule, TooltipModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    PasswordModule,
    MenubarModule, MenuModule, ToastModule, CalendarModule, SliderModule, MultiSelectModule, ContextMenuModule, DropdownModule, ProgressBarModule, FileUploadModule, ToolbarModule, RatingModule, RadioButtonModule, InputNumberModule, ConfirmDialogModule, InputTextareaModule, LiveModule, MatToolbarModule, PanelModule, ManualReviewModule, DynamicDialogModule, WebrtcModule, SidebarModule, FeatureModule, CardModule, FormsModule, BreadcrumbModule, MatCardModule,MatRippleModule,TreeModule
  ],
  declarations: [NetworkUnitPipe, CommonComponent, TextAreaComponent, PieChartComponent, BasicAreaComponent, MultiAreaComponent, HlsVideoComponent, Mp4VideoComponent, ChinaDatetimeTextComponent, ShowTimePipe, ChinaTimePipe, InputSearchComponent],
  exports: [
    TextAreaComponent, PieChartComponent, BasicAreaComponent, MultiAreaComponent, HlsVideoComponent, Mp4VideoComponent, ChinaDatetimeTextComponent, ShowTimePipe, TooltipModule, ChinaTimePipe, InputSearchComponent,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    PasswordModule,
    FormsModule,
    MenubarModule, MenuModule, ToastModule, CalendarModule, SliderModule, MultiSelectModule, ContextMenuModule, DropdownModule, ProgressBarModule, FileUploadModule, ToolbarModule, RatingModule, RadioButtonModule, InputNumberModule, ConfirmDialogModule, InputTextareaModule, LiveModule, MatToolbarModule, PanelModule, ManualReviewModule, DynamicDialogModule, WebrtcModule, SidebarModule, FeatureModule, CardModule, BreadcrumbModule, MatCardModule,MatRippleModule,TreeModule
  ]
})
export class CommonmModule { }
