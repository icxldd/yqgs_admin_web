/* tslint:disable */
import { Object } from './object';

/**
 * AccountAdminDto
 */
export interface AccountAdminDto {
  avatarUrl?: string;
  discussPublishCount?: number;
  files?: Object;
  isCloudChurchAdmin?: boolean;
  joinGuildCount?: number;
  lastUsingGuildId?: string;
  livecastPublishCount?: number;
  nickName?: string;
  notificationPublishCount?: number;
  ownerGuildCount?: number;
  phoneNumber?: string;
  userAuthId?: string;
  userCreatedTime?: string;
  violationCount?: number;
}
