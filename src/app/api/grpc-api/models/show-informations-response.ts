/* tslint:disable */
import { InformationDto } from './information-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowInformationsResponse
 */
export interface ShowInformationsResponse {

  /**
   * 一组消息信息
   */
  informations?: Array<InformationDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
