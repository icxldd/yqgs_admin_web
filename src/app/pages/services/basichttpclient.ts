import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from './AppConfigService';
import {environment} from '../../../environments/environment';
export class Basichttpclient {
    header: HttpHeaders;//默认为application/json的Content-Type Header
    private ur: string;//webapi基路径 例如:localhost:4200
    public get uriBase(): string {
        return `${this.ur}`;
      }
      constructor(protected httpClient: HttpClient) {
          //APIURL
        this.ur = environment.APIURL;
    
        this.header = new HttpHeaders({
          'Content-Type': 'application/json',
        });
      }
}
