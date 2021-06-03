/* tslint:disable */

/**
 * JoinGuildByGuildMember
 */
export interface JoinGuildByGuildMember {

  /**
   * 邀请码（无邀请码则必须输入教会编号）
   */
  code?: string;

  /**
   * 教会编号|手机号
   */
  joinIdentification?: string;

  /**
   * 成员头像地址
   */
  memberAvatarUrl?: string;

  /**
   * 成员昵称
   */
  memberNickname?: string;
}
