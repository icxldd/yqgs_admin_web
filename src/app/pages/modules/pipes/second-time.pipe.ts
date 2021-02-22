import { Pipe, PipeTransform } from '@angular/core';
import { TimeChina } from '../../common/time-china';

@Pipe({
  name: 'secondTime'
})
export class SecondTimePipe implements PipeTransform {
  /// value 结束 。args 开始
  transform(value: any, args?: any): any {

    return this.time(args,value);
  }

  time (faultDate, completeTime) {
    var stime = Date.parse(faultDate);
    var etime = Date.parse(completeTime);
    // 两个时间戳相差的毫秒数
    var usedTime = etime - stime;
    // 计算相差的天数  
    var days = Math.floor(usedTime / (24 * 3600 * 1000));
    // 计算天数后剩余的毫秒数
    var leave1 = usedTime % (24 * 3600 * 1000);  
    // 计算出小时数  
    var hours = Math.floor(leave1 / (3600 * 1000));
    // 计算小时数后剩余的毫秒数
    var leave2 = leave1 % (3600 * 1000);        
    // 计算相差分钟数
    var minutes = Math.floor(leave2 / (60 * 1000));
    let time ='';
    if(days==0){
      if(hours==0){
        if(minutes==0){
          time = "小于一分钟";
        }else{
          time = minutes + "分";
        }
      }
      else{
        time = hours + "时" + minutes + "分";
      }
    }
    else{
    time = days + "天" + hours + "时" + minutes + "分";
    }
    return time;
}

}
