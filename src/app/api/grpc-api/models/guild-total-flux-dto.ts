/* tslint:disable */
import { GuildDto } from './guild-dto';

/**
 * GuildTotalFluxDto
 */
export interface GuildTotalFluxDto {
  chargeFlux?: number;
  consumeFlux?: number;
  guild?: GuildDto;
  guildId?: string;
  remainFlux?: number;
}
