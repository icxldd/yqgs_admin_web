/* tslint:disable */
import { CurrentCultureDto } from './current-culture-dto';
import { NameValue } from './name-value';
import { LanguageInfo } from './language-info';
export interface ApplicationLocalizationConfigurationDto {
  currentCulture?: CurrentCultureDto;
  defaultResourceName?: string;
  languageFilesMap?: {[key: string]: Array<NameValue>};
  languages?: Array<LanguageInfo>;
  languagesMap?: {[key: string]: Array<NameValue>};
  values?: {[key: string]: {[key: string]: string}};
}
