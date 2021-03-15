
export enum FileType{
  hls,
  mp4,
  unKnown//未识别
}

export class FileHelp {

//获取小写后缀名
private static getFileType(filePath):string{
    var startIndex = filePath.lastIndexOf(".");
    if(startIndex != -1)
      return filePath.substring(startIndex+1, filePath.length).toLowerCase();
    else return "";
  }
  

public static getFileSuffixName(filePath:string):FileType{
  let suffixName =  FileHelp.getFileType(filePath);
  let rType:FileType = FileType.unKnown;

  switch (suffixName) {
    case "mp4":
      rType = FileType.mp4;
      break;
    case "m3u8":
      rType = FileType.hls
        break;
    default:
      break;
  }
  return rType;
}



}
