/* tslint:disable */
import { AuditableItemDto } from './auditable-item-dto';
import { ResponseStatus } from './response-status';

/**
 * AuditItemResponse
 */
export interface AuditItemResponse {

  /**
   * 可审核对象信息
   */
  item?: AuditableItemDto;

  /**
   * 处理响应的状态
   */
  responseStatus?: ResponseStatus;
}
