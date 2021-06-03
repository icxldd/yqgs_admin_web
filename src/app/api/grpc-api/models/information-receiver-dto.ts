/* tslint:disable */
import { GuildDto } from './guild-dto';
import { InformationDto } from './information-dto';
import { UserDto } from './user-dto';
import { GuildMemberDto } from './guild-member-dto';

/**
 * InformationReceiverDto
 */
export interface InformationReceiverDto {
  guild?: GuildDto;
  guildId?: string;
  hasJoined?: boolean;
  hasViewed?: boolean;
  information?: InformationDto;
  informationId?: string;
  isOnline?: boolean;
  receiverId?: string;
  user?: UserDto;
  userId?: string;
  userMember?: GuildMemberDto;
  userMemberId?: string;
  wasOnline?: boolean;
}
