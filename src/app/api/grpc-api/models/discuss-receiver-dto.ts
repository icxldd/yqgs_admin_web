/* tslint:disable */
import { DiscussDto } from './discuss-dto';
import { GuildDto } from './guild-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';

/**
 * DiscussReceiverDto
 */
export interface DiscussReceiverDto {
  discuss?: DiscussDto;
  discussId?: string;
  guild?: GuildDto;
  guildId?: string;
  hasJoined?: boolean;
  hasViewed?: boolean;
  receiverId?: string;
  user?: UserDto;
  userId?: string;
  userMember?: GuildMemberDto;
  userMemberId?: string;
}
