/* tslint:disable */
import { InformationAbuseReportDto } from './information-abuse-report-dto';
import { ResponseStatus } from './response-status';

/**
 * CreateInformationAbuseReportResponse
 */
export interface CreateInformationAbuseReportResponse {

  /**
   * 消息举报信息
   */
  abuseReport?: InformationAbuseReportDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
