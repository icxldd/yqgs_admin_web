/* tslint:disable */
import { EntityExtensionDto } from './entity-extension-dto';
export interface ModuleExtensionDto {
  configuration?: {[key: string]: any};
  entities?: {[key: string]: EntityExtensionDto};
}
