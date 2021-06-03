/* tslint:disable */
import { EntityDtoOfGuid } from './entity-dto-of-guid';
export interface CreationAuditedEntityDtoOfGuid extends EntityDtoOfGuid{

  /**
   * Creation time.
   */
  creationTime: string;

  /**
   * Id of the creator.
   */
  creatorId?: string;
}
