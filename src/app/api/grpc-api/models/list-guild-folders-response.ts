/* tslint:disable */
import { GuildFolderDto } from './guild-folder-dto';
import { ResponseStatus } from './response-status';

/**
 * ListGuildFoldersResponse
 */
export interface ListGuildFoldersResponse {

  /**
   * 一组教会文件夹信息
   */
  folders?: Array<GuildFolderDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
