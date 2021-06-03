/* tslint:disable */

/**
 * JoinGuild
 */
export interface JoinGuild {

  /**
   * 邀请码（无邀请码则必须输入教会编号）
   */
  code?: string;

  /**
   * 教会编号（无教会编号则必须输入邀请码）
   */
  guildId?: string;

  /**
   * 成员头像地址
   */
  memberAvatarUrl?: string;

  /**
   * 成员昵称
   */
  memberNickname?: string;
}
