/* tslint:disable */
import { GuildAdminDto } from './guild-admin-dto';
import { DiscussAdminDto } from './discuss-admin-dto';
import { LivecastAdminDto } from './livecast-admin-dto';
import { NotificationAdminDto } from './notification-admin-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowAccountDetailAdminResponse
 */
export interface ShowAccountDetailAdminResponse {
  createdGuilds?: Array<GuildAdminDto>;
  joinGuilds?: Array<GuildAdminDto>;
  publishDiscuss?: Array<DiscussAdminDto>;
  publishLivecast?: Array<LivecastAdminDto>;
  publishNotification?: Array<NotificationAdminDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
