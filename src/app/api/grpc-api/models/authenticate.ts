/* tslint:disable */
import { Dictionary_String_String_ } from './dictionary-_string-_string-_';

/**
 * Authenticate
 */
export interface Authenticate {
  accessToken?: string;
  accessTokenSecret?: string;
  cnonce?: string;
  continue?: string;
  errorView?: string;
  meta?: Dictionary_String_String_;
  nc?: string;
  nonce?: string;
  oauth_token?: string;
  oauth_verifier?: string;
  password?: string;
  provider?: string;
  qop?: string;
  rememberMe?: boolean;
  response?: string;
  scope?: string;
  state?: string;
  uri?: string;
  useTokenCookie?: boolean;
  userName?: string;
}
