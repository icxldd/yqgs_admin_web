/* tslint:disable */
import { InformationFileDto } from './information-file-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';
import { GuildDto } from './guild-dto';

/**
 * InformationAdminDto
 */
export interface InformationAdminDto {
  attachmentFiles?: Array<InformationFileDto>;
  attachmentFilesCount?: number;
  audioFiles?: Array<InformationFileDto>;
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
  endDate?: string;
  files?: Array<InformationFileDto>;
  filesCount?: number;
  guild?: GuildDto;
  guildId?: string;
  hasUserJoined?: boolean;
  hasUserViewed?: boolean;
  hasViewMembers?: Array<GuildMemberDto>;
  imageFiles?: Array<InformationFileDto>;
  imageFilesCount?: number;
  informationId?: string;
  isCurrentCreator?: boolean;
  isFeatured?: boolean;
  isRedirect?: boolean;
  joinedReceiversCount?: number;
  linkUrl?: string;
  mediaUrl?: string;
  noViewMembers?: Array<GuildMemberDto>;
  onlineReceiversCount?: number;
  receiversCount?: number;
  status?: number;
  statusMessage?: string;
  title?: string;
  type?: number;
  unjoinedReceiversCount?: number;
  unviewedReceiversCount?: number;
  videoFiles?: Array<InformationFileDto>;
  videoFilesCount?: number;
  viewedReceiversCount?: number;
  wasOnlineReceiversCount?: number;
}
