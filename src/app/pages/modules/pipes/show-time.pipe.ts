import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showTime'
})
export class ShowTimePipe implements PipeTransform {


   getDateTimeStamp(dateStr){
     let dateold = new Date(dateStr);
     dateold.setHours(dateold.getHours()+8);
    let date =  Date.parse(dateold.toString().replace(/-/gi,"/"));

    return date;
   }
   getDateDiff(dateTimeStamp,prefix){
     
var minute = 1000 * 60;
var hour = minute * 60;
var day = hour * 24;
var halfamonth = day * 15;
var month = day * 30;
var result = '';
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
     
    if(diffValue < 0){
     //非法操作
     //alert("结束日期不能小于开始日期！");
     }
     
    var monthC =diffValue/month;
    var weekC =diffValue/(7*day);
    var dayC =diffValue/day;
    var hourC =diffValue/hour;
    var minC =diffValue/minute;
     
    if(monthC>=1){
     result=prefix+"于" + parseInt(monthC.toString()) + "个月前";
     }
     else if(weekC>=1){
     result=prefix+"于" + parseInt(weekC.toString()) + "个星期前";
     }
     else if(dayC>=1){
     result=prefix+"于"+ parseInt(dayC.toString()) +"天前";
     }
     else if(hourC>=1){
     result=prefix+"于"+ parseInt(hourC.toString()) +"个小时前";
     }
     else if(minC>=1){
     result=prefix+"于"+ parseInt(minC.toString()) +"分钟前";
     }else{
     result="刚刚"+prefix;

     }


    return result;
}

  transform(value: any, args?: any): any {
   return this.getDateDiff( this.getDateTimeStamp(value),args);
  }

}
