/* tslint:disable */
import { Dictionary_String_String_ } from './dictionary-_string-_string-_';
import { ResponseStatus } from './response-status';

/**
 * AuthenticateResponse
 */
export interface AuthenticateResponse {
  bearerToken?: string;
  displayName?: string;
  meta?: Dictionary_String_String_;
  permissions?: Array<string>;
  profileUrl?: string;
  referrerUrl?: string;
  refreshToken?: string;
  responseStatus?: ResponseStatus;
  roles?: Array<string>;
  sessionId?: string;
  userId?: string;
  userName?: string;
}
