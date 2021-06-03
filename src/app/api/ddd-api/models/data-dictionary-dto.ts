/* tslint:disable */
import { FullAuditedEntityDtoOfGuid } from './full-audited-entity-dto-of-guid';
import { EContentType } from './econtent-type';
export interface DataDictionaryDto extends FullAuditedEntityDtoOfGuid{
  categoryName?: string;
  content?: string;
  dataDictionaryName?: string;
  eContentType: EContentType;
}
