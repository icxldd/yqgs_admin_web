/* tslint:disable */
import { LivecastAdminDto } from './livecast-admin-dto';

/**
 * GuildLivecastDto
 */
export interface GuildLivecastDto {
  guildAddress?: string;
  guildAvatarUrl?: string;
  guildCreatedTime?: string;
  guildId?: string;
  guildLivecastDto?: Array<LivecastAdminDto>;
  guildMembersCount?: string;
  guildName?: string;
  lasterCreatedLivecastTime?: string;
}
