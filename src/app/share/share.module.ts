import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule as dddApi } from '@app/api/ddd-api/api.module';
import { ApiModule as grpcApi} from '@app/api/grpc-api/api.module';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
    dddApi.forRoot({ rootUrl: environment.APIURL }),
    grpcApi.forRoot({ rootUrl: environment.APIURL }),
  ],
  declarations: []
})
export class ShareModule { }
