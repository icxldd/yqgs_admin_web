/* tslint:disable */
import { GuildFileDto } from './guild-file-dto';
import { GuildDto } from './guild-dto';

/**
 * GuildFolderDto
 */
export interface GuildFolderDto {
  files?: Array<GuildFileDto>;
  folderId?: string;
  guild?: GuildDto;
  guildId?: string;
  name?: string;
  parentFolder?: GuildFolderDto;
  parentFolderId?: string;
  path?: string;
}
