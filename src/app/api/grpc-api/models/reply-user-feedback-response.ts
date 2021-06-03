/* tslint:disable */
import { UserFeedbackDto } from './user-feedback-dto';
import { ResponseStatus } from './response-status';

/**
 * ReplyUserFeedbackResponse
 */
export interface ReplyUserFeedbackResponse {

  /**
   * 用户反馈信息
   */
  feedback?: UserFeedbackDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
