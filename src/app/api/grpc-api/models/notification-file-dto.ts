/* tslint:disable */
import { GuildDto } from './guild-dto';
import { NotificationDto } from './notification-dto';

/**
 * NotificationFileDto
 */
export interface NotificationFileDto {
  avatarUrl?: string;
  contentLength?: number;
  contentType?: string;
  duration?: number;
  fileId?: string;
  guild?: GuildDto;
  guildId?: string;
  height?: number;
  name?: string;
  notification?: NotificationDto;
  notificationId?: string;
  previewUrl?: string;
  type?: number;
  url?: string;
  width?: number;
}
