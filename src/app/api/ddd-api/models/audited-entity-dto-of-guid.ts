/* tslint:disable */
import { CreationAuditedEntityDtoOfGuid } from './creation-audited-entity-dto-of-guid';
export interface AuditedEntityDtoOfGuid extends CreationAuditedEntityDtoOfGuid{

  /**
   * The last modified time for this entity.
   */
  lastModificationTime?: string;

  /**
   * Last modifier user for this entity.
   */
  lastModifierId?: string;
}
