/* tslint:disable */
import { AuditableItemDto } from './auditable-item-dto';
import { UserDto } from './user-dto';

/**
 * AbuseReportDto
 */
export interface AbuseReportDto {
  category?: string;
  createdDate?: string;
  description?: string;
  item?: AuditableItemDto;
  itemId?: string;
  owner?: UserDto;
  ownerId?: number;
  reportId?: string;
}
