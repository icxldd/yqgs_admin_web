export class MultiAreaComponentReq {
        titlePreStr:string
        titleAfterStr:string
        titleContextStr:string
        lableNameData:Array<string>
        nameData:Array<string>
        valData:Array<{['name']:string,['type']:string,['stack']:string,['areaStyle']:{},data:Array<number>}>
}
