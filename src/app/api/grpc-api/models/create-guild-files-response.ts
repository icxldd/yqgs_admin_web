/* tslint:disable */
import { GuildFileDto } from './guild-file-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateGuildFilesResponse
 */
export interface CreateGuildFilesResponse {

  /**
   * 一组教会文件信息
   */
  files?: Array<GuildFileDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
