/* tslint:disable */
import { UserDto } from './user-dto';

/**
 * UserFeedbackDto
 */
export interface UserFeedbackDto {
  createdDate?: string;
  description?: string;
  feedbackId?: string;
  isReplied?: boolean;
  repliedDate?: string;
  repliedDescription?: string;
  replier?: UserDto;
  replierId?: string;
  user?: UserDto;
  userId?: string;
}
