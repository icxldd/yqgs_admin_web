/* tslint:disable */
import { DiscussFileDto } from './discuss-file-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';
import { GuildDto } from './guild-dto';
import { DiscussReceiverDto } from './discuss-receiver-dto';

/**
 * DiscussAdminDto
 */
export interface DiscussAdminDto {
  attachmentFiles?: Array<DiscussFileDto>;
  attachmentFilesCount?: number;
  audioFile?: DiscussFileDto;
  audioFilesCount?: number;
  avatarUrl?: string;
  beginDate?: string;
  contentsCount?: number;
  createdDate?: string;
  creator?: UserDto;
  creatorId?: string;
  creatorMember?: GuildMemberDto;
  creatorMemberId?: string;
  description?: string;
  discussId?: string;
  endDate?: string;
  files?: Array<DiscussFileDto>;
  filesCount?: number;
  guild?: GuildDto;
  guildId?: string;
  hasUserJoined?: boolean;
  hasUserViewed?: boolean;
  hasViewMembers?: Array<GuildMemberDto>;
  imageFiles?: Array<DiscussFileDto>;
  imageFilesCount?: number;
  isCurrentCreator?: boolean;
  joinedReceiversCount?: number;
  linkUrl?: string;
  noViewMembers?: Array<GuildMemberDto>;
  receivers?: Array<DiscussReceiverDto>;
  receiversCount?: number;
  status?: number;
  statusMessage?: string;
  title?: string;
  unjoinedReceiversCount?: number;
  unviewedReceiversCount?: number;
  videoFile?: DiscussFileDto;
  videoFilesCount?: number;
  viewedReceiversCount?: number;
}
