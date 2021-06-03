/* tslint:disable */

/**
 * CreateLivecastMessage
 */
export interface CreateLivecastMessage {

  /**
   * 标识图片地址
   */
  avatarUrl?: string;

  /**
   * 内容长度
   */
  contentLength?: number;

  /**
   * 描述
   */
  description?: string;

  /**
   * 时长（单位：秒）
   */
  duration?: number;

  /**
   * 高度
   */
  height?: number;

  /**
   * 直播编号
   */
  livecastId?: string;

  /**
   * 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
   */
  type?: number;

  /**
   * 地址
   */
  url?: string;

  /**
   * 宽度
   */
  width?: number;
}
