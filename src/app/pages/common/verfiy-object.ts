export class VerfiyObject {

    static isHasVal<T>(dto:Array<T>):boolean{
        if(dto==undefined||dto.length==0){
            return false;
        }else{
            return true;
        }
    }

}
