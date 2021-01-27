import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'networkUnit'
})
export class NetworkUnitPipe implements PipeTransform {


  getLayerCount(selfUnit: NetWorkUnit, targetUnit: NetWorkUnit) {
    let layerCount = 0;
    switch (selfUnit) {
      case NetWorkUnit.KB:
        switch (targetUnit) {
          case NetWorkUnit.KB:
            layerCount = 0;
            break;
          case NetWorkUnit.MB:
            layerCount = 1;
            break;
          case NetWorkUnit.GB:
            layerCount = 2;
            break;
          default:
            break;
        }
        break;
      case NetWorkUnit.MB:
        switch (targetUnit) {
          case NetWorkUnit.KB:
            layerCount = -1;
            break;
          case NetWorkUnit.MB:
            layerCount = 0;
            break;
          case NetWorkUnit.GB:
            layerCount = 1;
            break;
          default:
            break;
        }
        break;
      case NetWorkUnit.GB:
        switch (targetUnit) {
          case NetWorkUnit.KB:
            layerCount = -2;
            break;
          case NetWorkUnit.MB:
            layerCount = -1;
            break;
          case NetWorkUnit.GB:
            layerCount = 0;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
    return layerCount;
  }

  ///0->现在单位  1->要转换的单位  2->true:值 false:单位
  transform(value: any, ...args: any[]): any {

    let selfUnit: NetWorkUnit = args[0];
    let targetUnit: NetWorkUnit = args[1];
    let layerCount = this.getLayerCount(selfUnit, targetUnit);
    let sourceVal: number = value;
    const divNumber: number = 1024;
    let lastVal: number = 0;

    switch (layerCount) {
      case 1:
        lastVal = sourceVal / 1024;
        break;
      case 2:
        lastVal = sourceVal / 1024/1024;
        break;
      case -1:
        lastVal = sourceVal * 1024;
        break;
      case -2:
        lastVal = sourceVal * 1024*1024;
        break;
      default:
        break;
    }

    return lastVal.toFixed(2);
  }

}


export enum NetWorkUnit {
  KB = 0,
  MB = 1,
  GB = 2
}
