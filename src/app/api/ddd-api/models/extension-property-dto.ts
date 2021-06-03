/* tslint:disable */
import { ExtensionPropertyApiDto } from './extension-property-api-dto';
import { ExtensionPropertyAttributeDto } from './extension-property-attribute-dto';
import { LocalizableStringDto } from './localizable-string-dto';
import { ExtensionPropertyUiDto } from './extension-property-ui-dto';
export interface ExtensionPropertyDto {
  api?: ExtensionPropertyApiDto;
  attributes?: Array<ExtensionPropertyAttributeDto>;
  configuration?: {[key: string]: any};
  defaultValue?: any;
  displayName?: LocalizableStringDto;
  type?: string;
  typeSimple?: string;
  ui?: ExtensionPropertyUiDto;
}
