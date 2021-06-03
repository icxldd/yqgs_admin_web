/* tslint:disable */
import { EContentType } from './econtent-type';
export interface DataDictionaryCreateOrUpdate {
  categoryName?: string;
  content?: string;
  dataDictionaryName?: string;
  eContentType: EContentType;
}
