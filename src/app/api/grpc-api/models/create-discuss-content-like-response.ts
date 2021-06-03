/* tslint:disable */
import { DiscussContentLikeDto } from './discuss-content-like-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateDiscussContentLikeResponse
 */
export interface CreateDiscussContentLikeResponse {

  /**
   * 讨论内容点赞信息
   */
  like?: DiscussContentLikeDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
