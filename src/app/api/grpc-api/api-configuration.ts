/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://192.168.31.114';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
