/* tslint:disable */
import { NotificationFileDto } from './notification-file-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';
import { GuildDto } from './guild-dto';
import { NotificationReceiverDto } from './notification-receiver-dto';

/**
 * NotificationAdminDto
 */
export interface NotificationAdminDto {
  attachmentFiles?: Array<NotificationFileDto>;
  attachmentFilesCount?: number;
  audioFile?: NotificationFileDto;
  audioFilesCount?: number;
  avatarUrl?: string;
  createdDate?: string;
  creator?: UserDto;
  creatorId?: string;
  creatorMember?: GuildMemberDto;
  creatorMemberId?: string;
  description?: string;
  files?: Array<NotificationFileDto>;
  filesCount?: number;
  guild?: GuildDto;
  guildId?: string;
  hasUserJoined?: boolean;
  hasUserViewed?: boolean;
  hasViewMembers?: Array<GuildMemberDto>;
  imageFiles?: Array<NotificationFileDto>;
  imageFilesCount?: number;
  isCurrentCreator?: boolean;
  linkUrl?: string;
  noViewMembers?: Array<GuildMemberDto>;
  notificationId?: string;
  receivers?: Array<NotificationReceiverDto>;
  receiversCount?: number;
  status?: number;
  statusMessage?: string;
  title?: string;
  unviewedReceiversCount?: number;
  videoFile?: NotificationFileDto;
  videoFilesCount?: number;
  viewedReceiversCount?: number;
}
