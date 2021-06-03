/* tslint:disable */
import { ModuleApiDescriptionModel } from './module-api-description-model';
import { TypeApiDescriptionModel } from './type-api-description-model';
export interface ApplicationApiDescriptionModel {
  modules?: {[key: string]: ModuleApiDescriptionModel};
  types?: {[key: string]: TypeApiDescriptionModel};
}
