/* tslint:disable */
import { BeliefEquipViewItemDto } from './belief-equip-view-item-dto';
import { BeliefEquipFileDto } from './belief-equip-file-dto';
import { GuildDto } from './guild-dto';
import { Dictionary_String_String_ } from './dictionary-_string-_string-_';
import { AccountDto } from './account-dto';

/**
 * BeliefEquipDto
 */
export interface BeliefEquipDto {

  /**
   * 所有查看人员信息
   */
  allViewAuth?: Array<BeliefEquipViewItemDto>;

  /**
   * 浏览量总数
   */
  allViewedCount?: number;
  attachmentFiles?: Array<BeliefEquipFileDto>;
  attachmentFilesCount?: number;
  audioFiles?: Array<BeliefEquipFileDto>;
  audioFilesCount?: number;
  auditDate?: string;
  auditMessage?: string;
  auditorAuthId?: number;
  avatarUrl?: string;
  blockedDate?: string;
  createdDate?: string;
  creatorAuthId?: string;
  description?: string;
  featuredExpiryDate?: string;
  filesCount?: number;
  guildDto?: GuildDto;
  guildId?: string;
  hasAudited?: boolean;
  hasUserJoined?: boolean;
  hasUserViewed?: boolean;
  id?: string;
  imageFiles?: Array<BeliefEquipFileDto>;
  imageFilesCount?: number;
  isCurrentCreator?: boolean;
  isFeatured?: boolean;
  isImportLive?: boolean;
  linkUrl?: string;
  liveCastId?: string;
  meta?: Dictionary_String_String_;
  modifiedDate?: string;
  playBackUrl?: string;
  publishedDate?: string;
  status?: number;
  statusMessage?: string;
  title?: string;

  /**
   * 今日浏览数
   */
  toDayViewCount?: number;
  type?: number;
  typeId?: string;

  /**
   * 未查看人员信息
   */
  unViewAuth?: Array<AccountDto>;

  /**
   * 未查看人员总数
   */
  unViewedPersonCount?: number;
  videoFiles?: Array<BeliefEquipFileDto>;
  videoFilesCount?: number;

  /**
   * 所有查看人员信息
   */
  viewAuth?: Array<AccountDto>;

  /**
   * 已查看人员总数
   */
  viewedPersonCount?: number;
  worshipOwner?: string;
}
