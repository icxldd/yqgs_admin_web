/* tslint:disable */
import { DiscussDto } from './discuss-dto';
import { GuildDto } from './guild-dto';

/**
 * DiscussFileDto
 */
export interface DiscussFileDto {
  avatarUrl?: string;
  contentLength?: number;
  contentType?: string;
  discuss?: DiscussDto;
  discussId?: string;
  duration?: number;
  fileId?: string;
  guild?: GuildDto;
  guildId?: string;
  height?: number;
  name?: string;
  previewUrl?: string;
  type?: number;
  url?: string;
  width?: number;
}
