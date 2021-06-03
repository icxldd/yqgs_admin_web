/* tslint:disable */
import { AbuseReportDto } from './abuse-report-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowAbuseReportAuditAdminResponse
 */
export interface ShowAbuseReportAuditAdminResponse {

  /**
   * 举报审核列表
   */
  abuseReportDtos?: Array<AbuseReportDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
