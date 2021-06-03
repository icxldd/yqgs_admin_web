/* tslint:disable */

/**
 * BindAccount
 */
export interface BindAccount {

  /**
   * 是否是新用户绑定
   */
  isNewAccountOfBind?: boolean;

  /**
   * 绑定类型 0:绑定手机号，1：绑定微信账号
   */
  typeOfBind?: number;

  /**
   * 绑定的手机号|绑定的微信unionID
   */
  valueOfBind?: string;

  /**
   * 微信Token（绑定微信时候填写）
   */
  weChatAccessToken?: string;

  /**
   * 微信OpenId（绑定微信时候填写）
   */
  weChatOpenId?: string;
}
