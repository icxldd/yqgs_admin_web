import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'manualReview'
})
export class ManualReviewPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if('fileType'==args){
      switch(value){
            case -1:
            return '其它';    
            case 0:
            return '图片';
            case 1:
            return '音频';
            case 2:
            return '视频';
            case 3:
            return '文档';
            
      }
    }
  }

}
