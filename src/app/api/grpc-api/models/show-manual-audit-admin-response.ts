/* tslint:disable */
import { AuditableItemDto } from './auditable-item-dto';
import { ResponseStatus } from './response-status';

/**
 * ShowManualAuditAdminResponse
 */
export interface ShowManualAuditAdminResponse {

  /**
   * 审核列表
   */
  auditableItemDtos?: Array<AuditableItemDto>;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
