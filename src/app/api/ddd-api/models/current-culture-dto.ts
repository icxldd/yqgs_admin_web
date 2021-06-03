/* tslint:disable */
import { DateTimeFormatDto } from './date-time-format-dto';
export interface CurrentCultureDto {
  cultureName?: string;
  dateTimeFormat?: DateTimeFormatDto;
  displayName?: string;
  englishName?: string;
  isRightToLeft: boolean;
  name?: string;
  nativeName?: string;
  threeLetterIsoLanguageName?: string;
  twoLetterIsoLanguageName?: string;
}
