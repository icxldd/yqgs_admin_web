/* tslint:disable */

/**
 * SetGuildFileInfo
 */
export interface SetGuildFileInfo {

  /**
   * 标识图片地址
   */
  avatarUrl?: string;

  /**
   * 分类
   */
  category?: string;

  /**
   * 内容长度
   */
  contentLength?: number;

  /**
   * 内容类型
   */
  contentType?: string;

  /**
   * 时长（单位：秒）
   */
  duration?: number;

  /**
   * 文件编号
   */
  fileId?: string;

  /**
   * 高度
   */
  height?: number;

  /**
   * 名称
   */
  name?: string;

  /**
   * 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
   */
  type?: number;

  /**
   * 宽度
   */
  width?: number;
}
