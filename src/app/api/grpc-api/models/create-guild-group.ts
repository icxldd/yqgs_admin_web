/* tslint:disable */

/**
 * CreateGuildGroup
 */
export interface CreateGuildGroup {

  /**
   * 教会编号
   */
  guildId?: string;

  /**
   * 名称
   */
  name?: string;

  /**
   * 用户编号列表
   */
  userIds?: Array<string>;
}
