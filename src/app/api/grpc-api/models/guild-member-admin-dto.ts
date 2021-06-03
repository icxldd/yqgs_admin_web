/* tslint:disable */
import { GuildMemberDto } from './guild-member-dto';

/**
 * GuildMemberAdminDto
 */
export interface GuildMemberAdminDto {
  guildAddress?: string;
  guildAvatarUrl?: string;
  guildId?: string;
  guildMembersCount?: string;
  guildMembersDto?: Array<GuildMemberDto>;
  guildName?: string;
}
