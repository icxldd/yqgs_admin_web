/* tslint:disable */
import { DiscussContentDto } from './discuss-content-dto';
import { DiscussDto } from './discuss-dto';
import { GuildDto } from './guild-dto';

/**
 * DiscussContentFileDto
 */
export interface DiscussContentFileDto {
  avatarUrl?: string;
  content?: DiscussContentDto;
  contentId?: string;
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
