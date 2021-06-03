/* tslint:disable */
import { ControllerApiDescriptionModel } from './controller-api-description-model';
export interface ModuleApiDescriptionModel {
  controllers?: {[key: string]: ControllerApiDescriptionModel};
  remoteServiceName?: string;
  rootPath?: string;
}
