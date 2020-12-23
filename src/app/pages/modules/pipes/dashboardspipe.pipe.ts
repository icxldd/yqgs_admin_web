import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashboardspipe'
})
export class DashboardspipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if('GuildStatus'==args){
      switch(value){
          case 0:
            return '正常';
            case 1:
            return '等待审核';
            case -1:
            return '已删除';
            case -2:
            return '已屏蔽';
            case -3:
            return '已解散';
      }
    }
    else if('livecastStatus'==args){
      switch(value){
          case 0:
            return '进行中';
            case 1:
            return '未开始';
            case 2:
            return '已结束';
            case 3:
            return '已中断';
            case -1:
            return '已删除';
            case -2:
            return '已屏蔽';
      }
    }
    
    //return value.toString().substring(0,25);

    return null;
  }

}
