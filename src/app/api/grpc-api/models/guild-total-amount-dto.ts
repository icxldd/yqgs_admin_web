/* tslint:disable */
import { GuildDto } from './guild-dto';

/**
 * GuildTotalAmountDto
 */
export interface GuildTotalAmountDto {
  chargeFlux?: number;
  chargeMoney?: number;
  chargeTime?: number;
  consumeFlux?: number;
  consumeMoney?: number;
  consumeTime?: number;
  guild?: GuildDto;
  guildId?: string;
  remainFlux?: number;
  remainMoney?: number;
  remainTime?: number;
}
