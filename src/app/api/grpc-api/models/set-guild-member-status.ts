/* tslint:disable */

/**
 * SetGuildMemberStatus
 */
export interface SetGuildMemberStatus {

  /**
   * 教会编号
   */
  guildId?: string;

  /**
   * 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   */
  status?: number;

  /**
   * 状态消息
   */
  statusMessage?: string;

  /**
   * 用户编号
   */
  userId?: string;
}
