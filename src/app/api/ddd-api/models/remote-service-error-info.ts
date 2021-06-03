/* tslint:disable */
import { IDictionary } from './idictionary';
import { RemoteServiceValidationErrorInfo } from './remote-service-validation-error-info';

/**
 * Used to store information about an error.
 */
export interface RemoteServiceErrorInfo {

  /**
   * Error code.
   */
  code?: string;
  data?: IDictionary;

  /**
   * Error details.
   */
  details?: string;

  /**
   * Error message.
   */
  message?: string;

  /**
   * Validation errors if exists.
   */
  validationErrors?: Array<RemoteServiceValidationErrorInfo>;
}
