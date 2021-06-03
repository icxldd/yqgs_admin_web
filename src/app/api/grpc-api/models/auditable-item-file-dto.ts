/* tslint:disable */
import { GuildDto } from './guild-dto';
import { AuditableItemDto } from './auditable-item-dto';

/**
 * AuditableItemFileDto
 */
export interface AuditableItemFileDto {
  avatarUrl?: string;
  contentLength?: number;
  contentType?: string;
  duration?: number;
  fileId?: string;
  guild?: GuildDto;
  guildId?: string;
  height?: number;
  item?: AuditableItemDto;
  itemId?: string;
  name?: string;
  previewUrl?: string;
  type?: number;
  url?: string;
  width?: number;
}
