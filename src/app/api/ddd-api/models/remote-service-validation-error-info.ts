/* tslint:disable */

/**
 * Used to store information about a validation error.
 */
export interface RemoteServiceValidationErrorInfo {

  /**
   * Relate invalid members (fields/properties).
   */
  members?: Array<string>;

  /**
   * Validation error message.
   */
  message?: string;
}
