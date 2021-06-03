/* tslint:disable */
import { UserDto } from './user-dto';

/**
 * UserLogDto
 */
export interface UserLogDto {
  action?: number;
  createdDate?: string;
  description?: string;
  logId?: string;
  user?: UserDto;
  userId?: string;
}
