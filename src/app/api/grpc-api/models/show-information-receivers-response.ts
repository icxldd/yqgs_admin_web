/* tslint:disable */
import { InformationReceiverDto } from './information-receiver-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowInformationReceiversResponse
 */
export interface ShowInformationReceiversResponse {

  /**
   * 一组参与的接收者信息
   */
  joinedReceivers?: Array<InformationReceiverDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * 一组未参与的接收者信息
   */
  unJoinedReceivers?: Array<InformationReceiverDto>;
}
