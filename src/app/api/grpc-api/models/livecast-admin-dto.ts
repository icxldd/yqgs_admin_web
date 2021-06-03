/* tslint:disable */
import { LivecastFileDto } from './livecast-file-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';
import { GuildDto } from './guild-dto';
import { LivecastReceiverDto } from './livecast-receiver-dto';

/**
 * LivecastAdminDto
 */
export interface LivecastAdminDto {
  attachmentFiles?: Array<LivecastFileDto>;
  attachmentFilesCount?: number;
  audioFiles?: Array<LivecastFileDto>;
  audioFilesCount?: number;
  avatarUrl?: string;
  beginDate?: string;
  createdDate?: string;
  creator?: UserDto;
  creatorId?: string;
  creatorMember?: GuildMemberDto;
  creatorMemberId?: string;
  description?: string;
  endDate?: string;
  files?: Array<LivecastFileDto>;
  filesCount?: number;
  flux?: number;
  guild?: GuildDto;
  guildId?: string;
  hasUserJoined?: boolean;
  hasUserViewed?: boolean;
  hasViewMembers?: Array<GuildMemberDto>;
  hlsPlayUrl?: string;
  identifier?: string;
  imageFiles?: Array<LivecastFileDto>;
  imageFilesCount?: number;
  isCurrentCreator?: boolean;
  joinedReceiversCount?: number;
  linkUrl?: string;
  livecastId?: string;
  noViewMembers?: Array<GuildMemberDto>;
  onlineReceiversCount?: number;
  receivers?: Array<LivecastReceiverDto>;
  receiversCount?: number;
  recordUrl?: string;
  rtmpPlayUrl?: string;
  rtmpPushUrl?: string;
  speaker?: string;
  status?: number;
  statusMessage?: string;
  title?: string;
  unjoinedReceiversCount?: number;
  unviewedReceiversCount?: number;
  videoFiles?: Array<LivecastFileDto>;
  videoFilesCount?: number;
  viewedReceiversCount?: number;
  wasOnlineReceiversCount?: number;
}
