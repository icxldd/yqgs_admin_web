/* tslint:disable */
import { AuditableItemDto } from './auditable-item-dto';
import { GuildFileDto } from './guild-file-dto';
import { GuildMemberDto } from './guild-member-dto';
import { InformationAdminDto } from './information-admin-dto';
import { UserDto } from './user-dto';

/**
 * GuildAdminDto
 */
export interface GuildAdminDto {
  address?: string;
  auditables?: Array<AuditableItemDto>;
  avatarUrl?: string;
  backgroundUrl?: string;
  believersCount?: number;
  canSearchByPhoneNumber?: boolean;
  city?: string;
  country?: string;
  coverUrl?: string;
  createdDate?: string;
  description?: string;
  discussCount?: number;
  displayName?: string;
  files?: Array<GuildFileDto>;
  fullName?: string;
  guildAuditMode?: number;
  guildId?: string;
  guildLivecastRemainFlux?: number;
  guildmembers?: Array<GuildMemberDto>;
  informations?: Array<InformationAdminDto>;
  isCanNewJoin?: boolean;
  isCertificated?: boolean;
  isKickOutMemberForAdmin?: boolean;
  isOwner?: boolean;
  isPublic?: boolean;
  joinMode?: number;
  joinNewMemberForAdminAudit?: boolean;
  lasterCreatedLivecastTime?: string;
  leadersCount?: number;
  livecastCount?: number;
  members?: Array<GuildMemberDto>;
  membersCount?: number;
  notificationCount?: number;
  owner?: UserDto;
  ownerId?: number;
  pastorsCount?: number;
  postalCode?: string;
  province?: string;
  status?: number;
  statusMessage?: string;
  statusName?: string;
  violationCount?: number;
  waitAuditMemberCount?: number;
}
