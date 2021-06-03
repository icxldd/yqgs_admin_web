/* tslint:disable */
import { GuildFileDto } from './guild-file-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateGuildFileResponse
 */
export interface CreateGuildFileResponse {

  /**
   * 教会文件信息
   */
  file?: GuildFileDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
