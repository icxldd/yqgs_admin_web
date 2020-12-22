import { Component, Input, OnInit, ViewEncapsulation, ElementRef, ViewChild,AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { PieChartComponentReq } from 'src/app/globaldata';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }
  @Input() req:PieChartComponentReq;
  selfMvvmObject:PieChartComponentReq;
  @ViewChild('piechart') domLabelChild:ElementRef;
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
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      left: 10,
      top:30,
      data:this.selfMvvmObject.nameData
  },
    series: [
        {
            name: this.selfMvvmObject.titleAfterStr,
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
           
            emphasis: {
                label: {
                    show: true,
                    fontSize: '13',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: this.selfMvvmObject.data,  itemStyle:{
              normal:{
                    label:{
                      show: true,
                      formatter: '{b} : {c}'
                      // formatter: '{b} : {c} ({d}%)'
                    },
                    labelLine :{show:true}
                  }
              }
        }
    ]
    }
    lineChart.setOption(lineChartOption);

  }
}
