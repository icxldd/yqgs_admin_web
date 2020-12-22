import { Component, Input, OnInit, ViewEncapsulation, ElementRef, ViewChild,AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { MultiAreaComponentReq } from 'src/app/globaldata/component-dtos/multi-area-component-req';

@Component({
  selector: 'app-multi-area',
  templateUrl: './multi-area.component.html',
  styleUrls: ['./multi-area.component.scss']
})
export class MultiAreaComponent implements OnInit {
  @ViewChild('linechart') domLabelChild:ElementRef;
  constructor() { }

  @Input() req:MultiAreaComponentReq;
  selfMvvmObject:MultiAreaComponentReq;
  
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
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: this.selfMvvmObject.lableNameData
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: this.selfMvvmObject.nameData
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: this.selfMvvmObject.valData
    }
    lineChart.setOption(lineChartOption);

  }
}
