/* tslint:disable */

/**
 * ChangeGuildBaiscInfo
 */
export interface ChangeGuildBaiscInfo {

  /**
   * 教会编号
   */
  guildId?: string;

  /**
   * 更改的审核类型:(1.是否允许新成员加入 2.是否允许管理员审核新成员 3.是否允许管理员踢出群员 4.是否允许通过手机号搜索教会 )
   */
  modeType?: number;

  /**
   * 允许|不允许
   */
  value?: boolean;
}
