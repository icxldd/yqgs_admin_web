/* tslint:disable */
import { FullAuditedEntityDtoOfGuid } from './full-audited-entity-dto-of-guid';
export interface DataDictionaryTreeDto extends FullAuditedEntityDtoOfGuid{
  children?: Array<DataDictionaryTreeDto>;
  code?: string;
  description?: string;
  fullName?: string;
  index: number;
  level: number;
  name?: string;
  parentId?: string;
}
