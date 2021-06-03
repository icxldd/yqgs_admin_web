/* tslint:disable */
import { DiscussContentFileDto } from './discuss-content-file-dto';
import { DiscussContentCommentDto } from './discuss-content-comment-dto';
import { DiscussDto } from './discuss-dto';
import { GuildDto } from './guild-dto';
import { DiscussContentLikeDto } from './discuss-content-like-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';

/**
 * DiscussContentDto
 */
export interface DiscussContentDto {
  attachmentFile?: DiscussContentFileDto;
  attachmentFilesCount?: number;
  audioFile?: DiscussContentFileDto;
  audioFilesCount?: number;
  comments?: Array<DiscussContentCommentDto>;
  commentsCount?: number;
  contentId?: string;
  createdDate?: string;
  description?: string;
  discuss?: DiscussDto;
  discussId?: string;
  filesCount?: number;
  guild?: GuildDto;
  guildId?: string;
  hasUserCommented?: boolean;
  hasUserLiked?: boolean;
  imageFiles?: Array<DiscussContentFileDto>;
  imageFilesCount?: number;
  isCurrentUser?: boolean;
  likes?: Array<DiscussContentLikeDto>;
  likesCount?: number;
  status?: number;
  statusMessage?: string;
  type?: number;
  user?: UserDto;
  userId?: string;
  userMember?: GuildMemberDto;
  userMemberId?: string;
  videoFile?: DiscussContentFileDto;
  videoFilesCount?: number;
}
