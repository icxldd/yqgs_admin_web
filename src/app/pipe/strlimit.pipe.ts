import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strlimit'
})
export class StrlimitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toString().substring(0,25);
  }

}
