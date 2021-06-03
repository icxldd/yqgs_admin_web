/* tslint:disable */

/**
 * AuditGuildMember
 */
export interface AuditGuildMember {

  /**
   * *教会ID
   */
  guildId?: string;

  /**
   * *教会成员编号列表
   */
  guildMemberIds?: Array<string>;

  /**
   * 是否审核通过(true:通过;false:拒绝) 默认true
   */
  isAllow?: boolean;
}
