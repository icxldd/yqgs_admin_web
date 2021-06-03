/* tslint:disable */

/**
 * VersionDto
 */
export interface VersionDto {
  downloadUrl?: string;
  isForced?: boolean;
  miniPublished?: boolean;
  miniSharedPath?: string;
  name?: string;
  platform?: string;
  unapprovedPackages?: Array<string>;
  version?: string;
}
