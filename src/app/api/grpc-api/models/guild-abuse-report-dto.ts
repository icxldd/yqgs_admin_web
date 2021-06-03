/* tslint:disable */
import { GuildDto } from './guild-dto';
import { UserDto } from './user-dto';

/**
 * GuildAbuseReportDto
 */
export interface GuildAbuseReportDto {
  category?: string;
  description?: string;
  guild?: GuildDto;
  guildId?: string;
  owner?: UserDto;
  ownerId?: number;
  reportId?: string;
}
