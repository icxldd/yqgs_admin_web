/* tslint:disable */
import { GuildFolderDto } from './guild-folder-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateGuildFolderResponse
 */
export interface CreateGuildFolderResponse {

  /**
   * 教会文件夹信息
   */
  folder?: GuildFolderDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
