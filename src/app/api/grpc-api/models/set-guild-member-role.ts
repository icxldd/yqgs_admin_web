/* tslint:disable */

/**
 * SetGuildMemberRole
 */
export interface SetGuildMemberRole {

  /**
   * 教会编号
   */
  guildId?: string;

  /**
   * 角色（0: 信徒; 1: 同工; 2: 牧者）
   */
  role?: number;

  /**
   * 用户编号
   */
  userId?: string;
}
