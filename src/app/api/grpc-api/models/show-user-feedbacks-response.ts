/* tslint:disable */
import { UserFeedbackDto } from './user-feedback-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowUserFeedbacksResponse
 */
export interface ShowUserFeedbacksResponse {

  /**
   * 一组用户反馈信息
   */
  feedbacks?: Array<UserFeedbackDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
