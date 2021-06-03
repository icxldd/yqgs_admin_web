/* tslint:disable */
import { DiscussContentCommentDto } from './discuss-content-comment-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateDiscussContentCommentResponse
 */
export interface CreateDiscussContentCommentResponse {

  /**
   * 讨论内容评论信息
   */
  comment?: DiscussContentCommentDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
