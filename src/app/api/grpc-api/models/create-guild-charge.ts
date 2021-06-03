/* tslint:disable */

/**
 * CreateGuildCharge
 */
export interface CreateGuildCharge {

  /**
   * 数量（单位：0: 元; 1: M; 2: 分钟）
   */
  amount?: number;

  /**
   * 消费金额（单位：元）
   */
  consumedMoney?: number;

  /**
   * 教会编号
   */
  guildId?: string;

  /**
   * 是否是内部充值
   */
  isInward?: boolean;

  /**
   * 关联充值编号
   */
  referenceChargeId?: string;

  /**
   * 备注
   */
  remark?: string;

  /**
   * 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
   */
  type?: number;
}
