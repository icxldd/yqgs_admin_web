/* tslint:disable */
import { GuildDto } from './guild-dto';
import { LivecastDto } from './livecast-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';

/**
 * LivecastMessageDto
 */
export interface LivecastMessageDto {
  avatarUrl?: string;
  contentLength?: number;
  contentType?: string;
  createdDate?: string;
  description?: string;
  duration?: number;
  guild?: GuildDto;
  guildId?: string;
  height?: number;
  isCurrentUser?: boolean;
  livecast?: LivecastDto;
  livecastId?: string;
  messageId?: string;
  status?: number;
  statusMessage?: string;
  type?: number;
  url?: string;
  user?: UserDto;
  userId?: string;
  userMember?: GuildMemberDto;
  userMemberId?: string;
  width?: number;
}
