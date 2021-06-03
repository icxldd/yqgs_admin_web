/* tslint:disable */
import { DiscussContentDto } from './discuss-content-dto';
import { DiscussDto } from './discuss-dto';
import { GuildDto } from './guild-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';

/**
 * DiscussContentLikeDto
 */
export interface DiscussContentLikeDto {
  content?: DiscussContentDto;
  contentId?: string;
  discuss?: DiscussDto;
  discussId?: string;
  guild?: GuildDto;
  guildId?: string;
  isCurrentUser?: boolean;
  likeId?: string;
  user?: UserDto;
  userId?: string;
  userMember?: GuildMemberDto;
  userMemberId?: string;
}
