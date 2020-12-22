import { Component, Input, OnInit, ViewEncapsulation, ElementRef, ViewChild,AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { BasicAreaComponentReq } from 'src/app/globaldata/component-dtos/basic-area-component-req';
@Component({
  selector: 'app-basic-area',
  templateUrl: './basic-area.component.html',
  styleUrls: ['./basic-area.component.scss'],
})
export class BasicAreaComponent implements OnInit {

  constructor() { }
  @Input() req:BasicAreaComponentReq;
  selfMvvmObject:BasicAreaComponentReq;
  @ViewChild('linechart') domLabelChild:ElementRef;

  ngOnInit() {
    this.selfMvvmObject = this.req;
  }

  ngAfterViewInit(){
    this.initCharts();
  }
  initCharts() {
    const ec = echarts as any;
    const lineChart = ec.init(this.domLabelChild.nativeElement);

    const lineChartOption = {
      title: {
        text: `${this.selfMvvmObject.titlePreStr}${this.selfMvvmObject.titleContextStr}${this.selfMvvmObject.titleAfterStr}`
    },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.selfMvvmObject.nameData
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: this.selfMvvmObject.valData,
        type: 'line',
        areaStyle: {},
        itemStyle : {  normal:{
          label:{
            show: true,
            formatter: `{c}${this.selfMvvmObject.unit==undefined?'':this.selfMvvmObject.unit}`
          },
          labelLine :{show:true}
        }
    }
    }]
    }
    lineChart.setOption(lineChartOption);

  }
}
