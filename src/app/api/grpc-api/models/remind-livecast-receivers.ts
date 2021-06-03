/* tslint:disable */

/**
 * RemindLivecastReceivers
 */
export interface RemindLivecastReceivers {

  /**
   * 直播编号
   */
  livecastId?: string;

  /**
   * 提醒类型（0: 未查看; 1: 未参与; 2: 当前不在线; 3: 从未在线）
   */
  remindType?: number;
}
