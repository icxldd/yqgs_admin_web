/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { WeatherForecastService } from './services/weather-forecast.service';
import { AbpApplicationConfigurationService } from './services/abp-application-configuration.service';
import { AbpApiDefinitionService } from './services/abp-api-definition.service';
import { SampleService } from './services/sample.service';
import { OrderService } from './services/order.service';
import { BlocSimpleService } from './services/bloc-simple.service';
import { BlocDataDictionaryService } from './services/bloc-data-dictionary.service';
import { BlocDataDictionaryTreeService } from './services/bloc-data-dictionary-tree.service';
import { GrpcSampleService } from './services/grpc-sample.service';
import { ShopCategoryService } from './services/shop-category.service';

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
    WeatherForecastService,
    AbpApplicationConfigurationService,
    AbpApiDefinitionService,
    SampleService,
    OrderService,
    BlocSimpleService,
    BlocDataDictionaryService,
    BlocDataDictionaryTreeService,
    GrpcSampleService,
    ShopCategoryService
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
