/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { TestService } from './services/test.service';
import { StorageService } from './services/storage.service';
import { SpaadminService } from './services/spaadmin.service';
import { SecurityService } from './services/security.service';
import { WellKnownService } from './services/well-known.service';
import { PromotionService } from './services/promotion.service';
import { PeopleService } from './services/people.service';
import { OrganizationService } from './services/organization.service';
import { BasicdataService } from './services/basicdata.service';
import { ModuleService } from './services/module.service';
import { AdminService } from './services/admin.service';
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    TestService,
    StorageService,
    SpaadminService,
    SecurityService,
    WellKnownService,
    PromotionService,
    PeopleService,
    OrganizationService,
    BasicdataService,
    ModuleService,
    AdminService,
    AccountService,
    AuthService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
