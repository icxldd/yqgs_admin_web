/* tslint:disable */
import { GuildDto } from './guild-dto';
import { LivecastDto } from './livecast-dto';

/**
 * LivecastFileDto
 */
export interface LivecastFileDto {
  avatarUrl?: string;
  contentLength?: number;
  contentType?: string;
  duration?: number;
  fileId?: string;
  guild?: GuildDto;
  guildId?: string;
  height?: number;
  livecast?: LivecastDto;
  livecastId?: string;
  name?: string;
  previewUrl?: string;
  type?: number;
  url?: string;
  width?: number;
}
