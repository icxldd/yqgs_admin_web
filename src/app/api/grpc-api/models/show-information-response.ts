/* tslint:disable */
import { InformationDto } from './information-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowInformationResponse
 */
export interface ShowInformationResponse {

  /**
   * information
   */
  information?: InformationDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
