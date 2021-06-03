/* tslint:disable */
import { DiscussContentDto } from './discuss-content-dto';
import { DiscussDto } from './discuss-dto';
import { GuildDto } from './guild-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';

/**
 * DiscussContentCommentDto
 */
export interface DiscussContentCommentDto {
  commentId?: string;
  content?: DiscussContentDto;
  contentId?: string;
  createdDate?: string;
  description?: string;
  discuss?: DiscussDto;
  discussId?: string;
  guild?: GuildDto;
  guildId?: string;
  isCurrentUser?: boolean;
  parentComment?: DiscussContentCommentDto;
  parentCommentId?: string;
  status?: number;
  statusMessage?: string;
  user?: UserDto;
  userId?: string;
  userMember?: GuildMemberDto;
  userMemberId?: string;
}
