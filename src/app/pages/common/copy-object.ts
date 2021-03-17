import { livecastDto } from "../modules/dtos/dashboards";

export class CopyObject {

    static copyObject<T>(dto:Array<T>,t:{new():T}){
        let rarrys: Array<T>  = [];
        
        dto.map(x=>{
            let rObj =Object.assign(new t(),x);
            rarrys.push(rObj);
        });
        return rarrys;
    }

    // let vvv =  Object.assign(new livecastDto(),livecast);

    // isHasVal<T>(dto:Array<T>):boolean{
    //     if(dto==undefined||dto.length==0){
    //         return false;
    //     }else{
    //         return true;
    //     }
    // }
}
