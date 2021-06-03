/* tslint:disable */
import { GuildDto } from './guild-dto';
import { InformationDto } from './information-dto';

/**
 * InformationFileDto
 */
export interface InformationFileDto {
  avatarUrl?: string;
  contentLength?: number;
  contentType?: string;
  duration?: number;
  fileId?: string;
  guild?: GuildDto;
  guildId?: string;
  height?: number;
  information?: InformationDto;
  informationId?: string;
  name?: string;
  previewUrl?: string;
  type?: number;
  url?: string;
  width?: number;
}
