/* tslint:disable */
import { AuditableItemFileDto } from './auditable-item-file-dto';
import { UserDto } from './user-dto';
import { GuildDto } from './guild-dto';

/**
 * AuditableItemDto
 */
export interface AuditableItemDto {
  attachmentFiles?: Array<AuditableItemFileDto>;
  audioFiles?: Array<AuditableItemFileDto>;
  auditDate?: string;
  auditDescription?: string;
  auditMessage?: string;
  auditor?: UserDto;
  auditorId?: string;
  avatarUrl?: string;
  blockedDate?: string;
  createdDate?: string;
  description?: string;
  guild?: GuildDto;
  guildId?: string;
  hasAudited?: boolean;
  imageFiles?: Array<AuditableItemFileDto>;
  isCurrentUser?: boolean;
  itemId?: string;
  status?: number;
  statusMessage?: string;
  statusName?: string;
  title?: string;
  type?: number;
  typeName?: string;
  user?: UserDto;
  userId?: string;
  videoFiles?: Array<AuditableItemFileDto>;
}
