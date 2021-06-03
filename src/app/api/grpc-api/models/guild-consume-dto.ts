/* tslint:disable */
import { GuildDto } from './guild-dto';
import { UserDto } from './user-dto';

/**
 * GuildConsumeDto
 */
export interface GuildConsumeDto {
  amount?: number;
  consumeId?: string;
  createdDate?: string;
  guild?: GuildDto;
  guildId?: string;
  isCurrentOwner?: boolean;
  owner?: UserDto;
  ownerId?: string;
  remark?: string;
  type?: number;
  typeName?: string;
}
