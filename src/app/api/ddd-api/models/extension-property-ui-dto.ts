/* tslint:disable */
import { ExtensionPropertyUiLookupDto } from './extension-property-ui-lookup-dto';
import { ExtensionPropertyUiFormDto } from './extension-property-ui-form-dto';
import { ExtensionPropertyUiTableDto } from './extension-property-ui-table-dto';
export interface ExtensionPropertyUiDto {
  lookup?: ExtensionPropertyUiLookupDto;
  onCreateForm?: ExtensionPropertyUiFormDto;
  onEditForm?: ExtensionPropertyUiFormDto;
  onTable?: ExtensionPropertyUiTableDto;
}
