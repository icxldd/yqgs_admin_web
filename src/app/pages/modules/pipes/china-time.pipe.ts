import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'chinaTime'
})
export class ChinaTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let date = new Date(value);
    date.setHours(date.getHours()+8);
    return date.toLocaleString()
    // return this.GMTToStr(date);
  }

  GMTToStr(time){
    let date = new Date(time);
    let Str=date.getFullYear() + '-' +
        (date.getMonth() + 1) + '-' +
        date.getDate() + ' ' +
        date.getHours() + ':' +
        date.getMinutes() + ':' +
        date.getSeconds();
    return Str;
}
}
