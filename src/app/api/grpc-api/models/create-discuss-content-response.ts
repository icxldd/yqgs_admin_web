/* tslint:disable */
import { DiscussContentDto } from './discuss-content-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateDiscussContentResponse
 */
export interface CreateDiscussContentResponse {

  /**
   * 讨论内容信息
   */
  content?: DiscussContentDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
