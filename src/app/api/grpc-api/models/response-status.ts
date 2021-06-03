/* tslint:disable */
import { ResponseError } from './response-error';
import { Dictionary_String_String_ } from './dictionary-_string-_string-_';

/**
 * ResponseStatus
 */
export interface ResponseStatus {
  errorCode?: string;
  errors?: Array<ResponseError>;
  message?: string;
  meta?: Dictionary_String_String_;
  stackTrace?: string;
}
