/* tslint:disable */
import { GuildDto } from './guild-dto';
import { GuildMemberDto } from './guild-member-dto';

/**
 * GuildGroupDto
 */
export interface GuildGroupDto {
  groupId?: string;
  guild?: GuildDto;
  guildId?: string;
  members?: Array<GuildMemberDto>;
  name?: string;
}
