/* tslint:disable */
import { ActionApiDescriptionModel } from './action-api-description-model';
import { ControllerInterfaceApiDescriptionModel } from './controller-interface-api-description-model';
export interface ControllerApiDescriptionModel {
  actions?: {[key: string]: ActionApiDescriptionModel};
  controllerName?: string;
  interfaces?: Array<ControllerInterfaceApiDescriptionModel>;
  type?: string;
}
