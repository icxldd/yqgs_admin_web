/* tslint:disable */
import { ExtensionEnumDto } from './extension-enum-dto';
import { ModuleExtensionDto } from './module-extension-dto';
export interface ObjectExtensionsDto {
  enums?: {[key: string]: ExtensionEnumDto};
  modules?: {[key: string]: ModuleExtensionDto};
}
