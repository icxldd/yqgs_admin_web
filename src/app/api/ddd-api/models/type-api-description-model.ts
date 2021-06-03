/* tslint:disable */
import { PropertyApiDescriptionModel } from './property-api-description-model';
export interface TypeApiDescriptionModel {
  baseType?: string;
  enumNames?: Array<string>;
  enumValues?: Array<any>;
  genericArguments?: Array<string>;
  isEnum: boolean;
  properties?: Array<PropertyApiDescriptionModel>;
}
