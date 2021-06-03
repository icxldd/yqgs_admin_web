/* tslint:disable */
import { InformationDto } from './information-dto';
import { OtherInformationsDto } from './other-informations-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowGuildHomeResponse
 */
export interface ShowGuildHomeResponse {

  /**
   * 一组讨论消息
   */
  discuss?: Array<InformationDto>;

  /**
   * 直播消息
   */
  livecast?: Array<InformationDto>;

  /**
   * 一组通知消息
   */
  notifications?: Array<InformationDto>;

  /**
   * 其它消息
   */
  otherInformations?: Array<OtherInformationsDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
