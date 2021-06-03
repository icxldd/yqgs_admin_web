/* tslint:disable */
import { GuildMemberDto } from './guild-member-dto';
import { UserDto } from './user-dto';

/**
 * GuildDto
 */
export interface GuildDto {
  address?: string;
  avatarUrl?: string;
  backgroundUrl?: string;
  believersCount?: number;
  canSearchByPhoneNumber?: boolean;
  city?: string;
  country?: string;
  coverUrl?: string;
  createdDate?: string;
  description?: string;
  displayName?: string;
  fullName?: string;
  guildAuditMode?: number;
  guildId?: string;
  isCanNewJoin?: boolean;
  isCertificated?: boolean;
  isKickOutMemberForAdmin?: boolean;
  isOwner?: boolean;
  isPublic?: boolean;
  joinMode?: number;
  joinNewMemberForAdminAudit?: boolean;
  leadersCount?: number;
  members?: Array<GuildMemberDto>;
  membersCount?: number;
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
