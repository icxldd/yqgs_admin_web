/* tslint:disable */
import { AccountAdminDto } from './account-admin-dto';
import { DiscussAdminDto } from './discuss-admin-dto';
import { GuildLivecastDto } from './guild-livecast-dto';
import { NotificationAdminDto } from './notification-admin-dto';

/**
 * ShowSystemDetailAdminDto
 */
export interface ShowSystemDetailAdminDto {
  todayAccounts?: Array<AccountAdminDto>;
  todayDiscuss?: Array<DiscussAdminDto>;
  todayLivecasts?: Array<GuildLivecastDto>;
  todayNotifications?: Array<NotificationAdminDto>;
  yesterdayAccounts?: Array<AccountAdminDto>;
  yesterdayDiscuss?: Array<DiscussAdminDto>;
  yesterdayLivecasts?: Array<GuildLivecastDto>;
  yesterdayNotifications?: Array<NotificationAdminDto>;
}
