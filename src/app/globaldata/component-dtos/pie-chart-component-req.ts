export class PieChartComponentReq {
    titlePreStr:string
    titleAfterStr:string
    titleContextStr:string
    nameData:Array<string>
    data:Array<{['name']:string,['value']:number}>
}
