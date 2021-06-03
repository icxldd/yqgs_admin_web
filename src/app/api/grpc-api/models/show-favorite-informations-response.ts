/* tslint:disable */
import { InformationDto } from './information-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowFavoriteInformationsResponse
 */
export interface ShowFavoriteInformationsResponse {

  /**
   * 一组消息信息
   */
  informations?: Array<InformationDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
