/* tslint:disable */

/**
 * ChangeGuildJoinMode
 */
export interface ChangeGuildJoinMode {

  /**
   * 教会编号
   */
  guildId?: string;

  /**
   * 加入方式（0: 不允许加入; 1: 需要所有者或管理员同意; 2: 直接加入）
   */
  joinMode?: number;
}
