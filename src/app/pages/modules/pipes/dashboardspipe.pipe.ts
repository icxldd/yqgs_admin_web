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
            return '<span style="color: green;">进行中</span>';
            case 1:
            return '未开始';
            case 2:
            return '<span style="color: #2196f3;">已结束</span>';
            case 3:
            return '<span style="color: red;">已中断</span>';
            case -1:
            return '<span style="color: red;">已删除</span>';
            case -2:
            return '<span style="color: red;">已屏蔽</span>';
      }
    }
    else if('discussStatus'==args){
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
    else if('notificationStatus'==args){
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
    else if('guildMemberStatus'==args){
      switch(value){
            case 0:
            return '正常';
            case 1:
            return '等待审核';
            case 2:
            return '已邀请等待加入';
            case -1:
            return '已退出';
            case -2:
            return '已屏蔽';
            case -3:
            return '已拒绝';
      }
    }
    
    //return value.toString().substring(0,25);

    return null;
  }

}
