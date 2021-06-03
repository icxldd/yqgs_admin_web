/* tslint:disable */
import { ExtensionPropertyDto } from './extension-property-dto';
export interface EntityExtensionDto {
  configuration?: {[key: string]: any};
  properties?: {[key: string]: ExtensionPropertyDto};
}
