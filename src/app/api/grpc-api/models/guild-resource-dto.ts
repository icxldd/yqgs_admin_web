/* tslint:disable */

/**
 * GuildResourceDto
 */
export interface GuildResourceDto {
  avatarUrl?: string;
  createdAuthUserId?: string;
  createdDate?: string;
  description?: string;
  guildId?: string;
  highlightDescription?: string;
  highlightTitle?: string;
  id?: string;
  modifiedDate?: string;

  /**
   * 通知讨论直播才有值，其它为null
   */
  ownerMemberIds?: string;
  status?: number;
  title?: string;

  /**
   * 类型（0: 通知; 1: 直播; 2: 讨论; 3: 文件; 4: 教会成员;5：主日聚会）
   */
  type?: number;

  /**
   * 已查看人员总数
   */
  viewCount?: number;
}
