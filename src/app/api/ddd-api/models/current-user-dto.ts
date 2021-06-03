/* tslint:disable */
export interface CurrentUserDto {
  email?: string;
  emailVerified: boolean;
  id?: string;
  isAuthenticated: boolean;
  name?: string;
  phoneNumber?: string;
  phoneNumberVerified: boolean;
  roles?: Array<string>;
  surName?: string;
  tenantId?: string;
  userName?: string;
}
