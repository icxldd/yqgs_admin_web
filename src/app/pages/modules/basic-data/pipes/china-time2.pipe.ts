import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chinatime2'
})
export class ChinaTime2Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new Date(value).toLocaleString();
  }

}
