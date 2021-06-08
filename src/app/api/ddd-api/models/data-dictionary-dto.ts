/* tslint:disable */
import { FullAuditedEntityDtoOfGuid } from './full-audited-entity-dto-of-guid';
import { DataDictionaryTreeDto } from './data-dictionary-tree-dto';
import { EContentType } from './econtent-type';
export interface DataDictionaryDto extends FullAuditedEntityDtoOfGuid{
  categoryDto?: DataDictionaryTreeDto;
  categoryId?: string;
  content?: string;
  description?: string;
  eContentType: EContentType;
  key?: string;
  name?: string;
}
