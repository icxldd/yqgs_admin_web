/* tslint:disable */
import { BeliefEquipDto } from './belief-equip-dto';

/**
 * BeliefEquipFileDto
 */
export interface BeliefEquipFileDto {
  avatarUrl?: string;
  beliefEquip?: BeliefEquipDto;
  beliefEquipId?: string;
  contentLength?: number;
  contentType?: string;
  duration?: number;
  fileId?: string;
  guildId?: string;
  height?: number;
  name?: string;
  previewUrl?: string;
  type?: number;
  url?: string;
  width?: number;
}
