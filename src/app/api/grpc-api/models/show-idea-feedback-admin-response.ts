/* tslint:disable */
import { ResponseStatus } from './response-status';
import { UserFeedbackDto } from './user-feedback-dto';

/**
 * ShowIdeaFeedbackAdminResponse
 */
export interface ShowIdeaFeedbackAdminResponse {

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;

  /**
   * 意见反馈列表
   */
  userFeedbackDtos?: Array<UserFeedbackDto>;
}
