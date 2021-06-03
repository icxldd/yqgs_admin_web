/* tslint:disable */
import { BeliefEquipDto } from './belief-equip-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateBeliefEquipResponse
 */
export interface CreateBeliefEquipResponse {

  /**
   * 信仰装备列表
   */
  beliefEquip?: Array<BeliefEquipDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
