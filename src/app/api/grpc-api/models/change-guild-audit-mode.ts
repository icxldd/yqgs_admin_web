/* tslint:disable */

/**
 * ChangeGuildAuditMode
 */
export interface ChangeGuildAuditMode {

  /**
   * 教会编号
   */
  guildId?: string;

  /**
   * 更改的审核类型:(1.仅被邀请加入的新成员不需要审核 2.仅搜索加入的新成员需要审核 3.所有途径的新加入成员都需要审核 4.所有途径的新加入成员都不需要审核)
   */
  modeTypeValue?: number;
}
