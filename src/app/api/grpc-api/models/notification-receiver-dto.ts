/* tslint:disable */
import { GuildDto } from './guild-dto';
import { NotificationDto } from './notification-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';

/**
 * NotificationReceiverDto
 */
export interface NotificationReceiverDto {
  guild?: GuildDto;
  guildId?: string;
  hasViewed?: boolean;
  notification?: NotificationDto;
  notificationId?: string;
  receiverId?: string;
  user?: UserDto;
  userId?: string;
  userMember?: GuildMemberDto;
  userMemberId?: string;
}
