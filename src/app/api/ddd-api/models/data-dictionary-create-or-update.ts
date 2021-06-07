/* tslint:disable */
import { EContentType } from './econtent-type';
export interface DataDictionaryCreateOrUpdate {
  categoryId: string;
  content?: string;
  description?: string;
  eContentType: EContentType;
  key?: string;
  name?: string;
}
