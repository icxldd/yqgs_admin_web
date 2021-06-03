/* tslint:disable */
import { ParameterApiDescriptionModel } from './parameter-api-description-model';
import { MethodParameterApiDescriptionModel } from './method-parameter-api-description-model';
import { ReturnValueApiDescriptionModel } from './return-value-api-description-model';
export interface ActionApiDescriptionModel {
  httpMethod?: string;
  name?: string;
  parameters?: Array<ParameterApiDescriptionModel>;
  parametersOnMethod?: Array<MethodParameterApiDescriptionModel>;
  returnValue?: ReturnValueApiDescriptionModel;
  supportedVersions?: Array<string>;
  uniqueName?: string;
  url?: string;
}
