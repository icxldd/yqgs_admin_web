/* tslint:disable */
import { GuildDto } from './guild-dto';
import { LivecastDto } from './livecast-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';

/**
 * LivecastReceiverDto
 */
export interface LivecastReceiverDto {
  guild?: GuildDto;
  guildId?: string;
  hasJoined?: boolean;
  hasViewed?: boolean;
  isOnline?: boolean;
  livecast?: LivecastDto;
  livecastId?: string;
  receiverId?: string;
  user?: UserDto;
  userId?: string;
  userMember?: GuildMemberDto;
  userMemberId?: string;
  wasOnline?: boolean;
}
