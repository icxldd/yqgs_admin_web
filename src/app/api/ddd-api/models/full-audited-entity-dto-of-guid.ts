/* tslint:disable */
import { AuditedEntityDtoOfGuid } from './audited-entity-dto-of-guid';
export interface FullAuditedEntityDtoOfGuid extends AuditedEntityDtoOfGuid{

  /**
   * Id of the deleter user.
   */
  deleterId?: string;

  /**
   * Deletion time.
   */
  deletionTime?: string;

  /**
   * Used to mark an Entity as 'Deleted'.
   */
  isDeleted: boolean;
}
