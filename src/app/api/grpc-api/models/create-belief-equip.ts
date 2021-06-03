/* tslint:disable */
import { FileInfo } from './file-info';

/**
 * CreateBeliefEquip
 */
export interface CreateBeliefEquip {

  /**
   * 标识图片地址
   */
  avatarUrl?: string;

  /**
   * 描述
   */
  description?: string;

  /**
   * 置顶过期时间(默认：null)
   */
  featuredExpiryDate?: string;

  /**
   * 文件列表
   */
  files?: Array<FileInfo>;

  /**
   * *教会ID
   */
  guildId?: string;

  /**
   * 是否置顶(默认：false)
   */
  isFeatured?: boolean;

  /**
   * linkUrl
   */
  linkUrl?: string;

  /**
   * 导入直播ID时候，Yes：需要填写GuildId，Type  其它字段根据直播记录自动生成
   */
  liveCastIds?: Array<string>;

  /**
   * *敬拜时间
   */
  publishedDate?: string;

  /**
   * 是否复制文件到教会文件中(默认：false)
   */
  shouldCopyFiles?: boolean;

  /**
   * 是否发布(默认：true)
   */
  shouldPublish?: boolean;

  /**
   * 标题
   */
  title?: string;

  /**
   * *信仰装备类型 (1.主日敬拜|聚会 2.讲道 3.唱诗 4.祷告 5.其它)
   */
  type?: number;

  /**
   * 敬拜人|敬拜教会(默认：null)
   */
  worshipOwner?: string;
}
