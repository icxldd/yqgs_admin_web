/* tslint:disable */
import { BeliefEquipDto } from './belief-equip-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowBeliefEquipsResponse
 */
export interface ShowBeliefEquipsResponse {

  /**
   * 一组信仰装备信息
   */
  beliefEquips?: Array<BeliefEquipDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
