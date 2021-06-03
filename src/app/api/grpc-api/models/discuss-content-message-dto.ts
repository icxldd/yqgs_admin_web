/* tslint:disable */
import { DiscussContentDto } from './discuss-content-dto';
import { DiscussDto } from './discuss-dto';
import { GuildDto } from './guild-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';

/**
 * DiscussContentMessageDto
 */
export interface DiscussContentMessageDto {
  content?: DiscussContentDto;
  contentId?: string;
  createdDate?: string;
  description?: string;
  discuss?: DiscussDto;
  discussId?: string;
  guild?: GuildDto;
  guildId?: string;
  isCurrentUser?: boolean;
  messageId?: string;
  parentMessage?: DiscussContentMessageDto;
  parentMessageId?: string;
  type?: number;
  user?: UserDto;
  userId?: string;
  userMember?: GuildMemberDto;
  userMemberId?: string;
}
