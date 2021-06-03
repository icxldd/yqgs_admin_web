/* tslint:disable */
import { FileInfo } from './file-info';

/**
 * CreateNotifications
 */
export interface CreateNotifications {

  /**
   * 标识图片地址
   */
  avatarUrl?: string;

  /**
   * 描述
   */
  description?: string;

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
   * 计划发布时间
   */
  publishedScheduleDate?: string;

  /**
   * 接收者成员列表
   */
  receiverMemberIds?: Array<string>;

  /**
   * 是否复制文件到教会文件中
   */
  shouldCopyFiles?: boolean;

  /**
   * 是否发布
   */
  shouldPublish?: boolean;
}
