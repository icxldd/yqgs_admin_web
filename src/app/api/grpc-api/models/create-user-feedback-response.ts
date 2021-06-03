/* tslint:disable */
import { UserFeedbackDto } from './user-feedback-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateUserFeedbackResponse
 */
export interface CreateUserFeedbackResponse {

  /**
   * 用户反馈信息
   */
  feedback?: UserFeedbackDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
