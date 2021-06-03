/* tslint:disable */
import { GuildDto } from './guild-dto';
import { UserDto } from './user-dto';

/**
 * GuildMemberDto
 */
export interface GuildMemberDto {
  avatarUrl?: string;
  guild?: GuildDto;
  guildId?: string;
  memberId?: string;
  modifiedDate?: string;
  nickname?: string;
  phoneNumber?: string;
  role?: number;

  /**
   * 状态。（-3：已拒绝; -2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
   */
  status?: number;
  statusMessage?: string;
  user?: UserDto;
  userId?: string;
}
