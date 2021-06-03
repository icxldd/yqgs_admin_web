/* tslint:disable */
import { FileInfo } from './file-info';

/**
 * CreateLivecasts
 */
export interface CreateLivecasts {

  /**
   * 标识图片地址
   */
  avatarUrl?: string;

  /**
   * 开始时间
   */
  beginDate?: string;

  /**
   * 描述
   */
  description?: string;

  /**
   * 结束时间
   */
  endDate?: string;

  /**
   * 置顶过期时间
   */
  featuredExpiryDate?: string;

  /**
   * 文件列表
   */
  files?: Array<FileInfo>;

  /**
   * 是否置顶
   */
  isFeatured?: boolean;

  /**
   * linkUrl
   */
  linkUrl?: string;

  /**
   * 接收者成员列表
   */
  receiverMemberIds?: Array<string>;

  /**
   * 是否复制文件到教会文件中
   */
  shouldCopyFiles?: boolean;

  /**
   * 主讲人
   */
  speaker?: string;

  /**
   * 主题
   */
  title?: string;
}
