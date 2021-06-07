/* tslint:disable */
import { DataDictionaryDto } from './data-dictionary-dto';
export interface GetAllDataDto {
  data?: Array<DataDictionaryDto>;
  totalRecords: number;
}
