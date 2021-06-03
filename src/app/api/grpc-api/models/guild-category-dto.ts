/* tslint:disable */
import { GuildMemberDto } from './guild-member-dto';

/**
 * GuildCategoryDto
 */
export interface GuildCategoryDto {
  avatarUrl?: string;
  categories?: Array<GuildCategoryDto>;
  members?: Array<GuildMemberDto>;
  name?: string;
}
