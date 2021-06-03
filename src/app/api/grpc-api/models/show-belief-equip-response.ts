/* tslint:disable */
import { BeliefEquipDto } from './belief-equip-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowBeliefEquipResponse
 */
export interface ShowBeliefEquipResponse {

  /**
   * 信仰装备信息
   */
  beliefEquip?: BeliefEquipDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
