/* tslint:disable */
import { GuildDto } from './guild-dto';
import { UserDto } from './user-dto';

/**
 * GuildChargeDto
 */
export interface GuildChargeDto {
  amount?: number;
  chargeId?: string;
  consumedMoney?: number;
  createdDate?: string;
  guild?: GuildDto;
  guildId?: string;
  isCurrentOwner?: boolean;
  owner?: UserDto;
  ownerId?: string;
  referenceCharge?: GuildChargeDto;
  referenceChargeId?: string;
  remark?: string;
  type?: number;
  typeName?: string;
}
