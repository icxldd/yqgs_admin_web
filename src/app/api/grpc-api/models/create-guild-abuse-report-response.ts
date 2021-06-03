/* tslint:disable */
import { GuildAbuseReportDto } from './guild-abuse-report-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateGuildAbuseReportResponse
 */
export interface CreateGuildAbuseReportResponse {

  /**
   * 教会举报信息
   */
  abuseReport?: GuildAbuseReportDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
