/* tslint:disable */
import { GuildFolderDto } from './guild-folder-dto';
import { GuildDto } from './guild-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';

/**
 * GuildFileDto
 */
export interface GuildFileDto {
  avatarUrl?: string;
  category?: string;
  contentLength?: number;
  contentType?: string;
  createdDate?: string;
  duration?: number;
  fileId?: string;
  folder?: GuildFolderDto;
  folderId?: string;
  guild?: GuildDto;
  guildId?: string;
  height?: number;
  isCurrentOwner?: boolean;
  name?: string;
  owner?: UserDto;
  ownerId?: string;
  ownerMember?: GuildMemberDto;
  ownerMemberId?: string;
  path?: string;
  previewUrl?: string;
  type?: number;
  url?: string;
  width?: number;
}
