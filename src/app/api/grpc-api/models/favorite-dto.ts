/* tslint:disable */
import { GuildDto } from './guild-dto';
import { InformationDto } from './information-dto';
import { UserDto } from './user-dto';

/**
 * FavoriteDto
 */
export interface FavoriteDto {
  createdDate?: string;
  favoriteId?: string;
  guild?: GuildDto;
  guildId?: string;
  information?: InformationDto;
  informationId?: string;
  user?: UserDto;
  userId?: string;
}
