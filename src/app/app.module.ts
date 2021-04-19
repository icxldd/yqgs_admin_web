import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './pages/services/auth-guard.service';
import { AuthService } from './pages/services/auth.service';
import { LocalStoreService } from './pages/services/local-store.service';
import { AppCacheService } from './pages/services/app-cache.service';
import { LoginComponent } from './pages/components/Login/Login.component';
import {AccordionModule} from 'primeng/accordion';   
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PagecontrolService } from './pages/services/pagecontrol.service';
import { AuthInterceptorService } from './pages/services/AuthInterceptor.service';
import { ImageUploadOssService } from './pages/services/ImageUploadOss.service';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService } from './pages/services/AppConfigService';
import {ProductService} from './pages/services/product.service'





import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { Post_Component } from './pages/components/post_/post_.component';
import { TestComponent } from './pages/components/test/test.component';




import { LiveComponent } from './live/live.component';
import { LiveService } from './live/services/live.service';
import { StrlimitPipe } from './pipe/strlimit.pipe';
import { GuildComponent } from './pages/modules/dashboards/guild/guild.component';
import { DashboardspipePipe } from './pages/modules/pipes/dashboardspipe.pipe';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CommonmModule } from './common/common.module';
import { LivecastComponent } from './pages/modules/dashboards/livecast/livecast.component';
import { DiscussComponent } from './pages/modules/dashboards/discuss/discuss.component';
import { NotificationComponent } from './pages/modules/dashboards/notification/notification.component';
import { GuildMemberComponent } from './pages/modules/dashboards/guild-member/guild-member.component';
import { AccountComponent } from './pages/modules/dashboards/account/account.component';
import { ManualReviewModule } from './pages/modules/manual-review/manual-review.module';
import { ManualAuditComponent } from './pages/modules/manual-review/manual-audit/manual-audit.component';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { FileListComponent } from './pages/modules/manual-review/common-component/file-list/file-list.component';
import { ManualReviewPipe } from './pages/modules/pipes/manual-review.pipe';
import { ManualAuditDetailComponent } from './pages/modules/manual-review/manual-audit/manual-audit-detail/manual-audit-detail.component';
import { AbuseReportAuditComponent } from './pages/modules/manual-review/abuse-report-audit/abuse-report-audit.component';
import { IdeaFeedbackComponent } from './pages/modules/manual-review/idea-feedback/idea-feedback.component';
import { IdeaReplierComponent } from './pages/modules/manual-review/common-component/idea-replier/idea-replier.component';
import { AuditableItemListComponent } from './pages/modules/common/auditableItem-list/auditableItem-list.component';
import { LivecastDialogComponent } from './pages/modules/common/livecast-dialog/livecast-dialog.component';
import { DiscussDialogComponent } from './pages/modules/common/discuss-dialog/discuss-dialog.component';
import { NotificationDialogComponent } from './pages/modules/common/notification-dialog/notification-dialog.component';
import { GuildDialogComponent } from './pages/modules/common/guild-dialog/guild-dialog.component';
import { ViolatedAuditableItemComponent } from './pages/modules/common/violatedAuditableItem/violatedAuditableItem.component';
import { GuildmemberListComponent } from './pages/modules/common/guildmember-list/guildmember-list.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GuildLivecastFluxTotalComponent } from './pages/modules/dashboards/guild/guild-livecast-flux-total/guild-livecast-flux-total.component';
import { GuildLivecastFluxChargeComponent } from './pages/modules/dashboards/guild/guild-livecast-flux-charge/guild-livecast-flux-charge.component';
import { GuildLivecastFluxConsumeComponent } from './pages/modules/dashboards/guild/guild-livecast-flux-consume/guild-livecast-flux-consume.component';
import { WebsockertService } from './pages/services/websockert.service';
import { WebrtcComponent } from './pages/components/webrtc/webrtc.component';
import { BasicService } from './pages/services/basic.service';
import { SearchPageComponent } from './pages/modules/webrtc/search-page/search-page.component';
import { RoomPageComponent } from './pages/modules/webrtc/room-page/room-page.component';


import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SocketWebrtcService } from './pages/modules/services/socket-webrtc.service';
import { SystemComponent } from './pages/modules/dashboards/system/system.component';
import { SystemService } from './pages/modules/services/system.service';
import { AccountDialogComponent } from './pages/modules/common/account-dialog/account-dialog.component';

import { ExportExcelComponent } from './common/components/export-excel/export-excel.component';
import { ExportExcelDetailComponent } from './feature/components/export-excel-detail/export-excel-detail.component';
import { OpenSearchDetailComponent } from './feature/components/open-search-detail/open-search-detail.component';
import { ShowInfoDetailComponent } from './common/components/show-info-detail/show-info-detail.component';
import { SecondTimePipe } from './pages/modules/pipes/second-time.pipe';
import { HtmlBuildPipe } from './pages/modules/pipes/html-build.pipe';
import { GuildLivecastDialogComponent } from './pages/modules/common/guild-livecast-dialog/guild-livecast-dialog.component';
import { LivecastLazyComponent } from './pages/modules/dashboards/livecast-lazy/livecast-lazy.component';
import { GuildLazyComponent } from './pages/modules/dashboards/guild-lazy/guild-lazy.component';
const config: SocketIoConfig = { url: 'https://192.168.31.114:3001', options: {} };
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
  const appConfigInitializerFn = (appConfig: AppConfigService) => {
    return () => {
      return null;
    }
  };
  export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ];
@NgModule({
    declarations: [
        AppComponent,LoginComponent,Post_Component,LiveComponent,StrlimitPipe,TestComponent,GuildComponent,LivecastComponent,LivecastLazyComponent,GuildLazyComponent,DashboardspipePipe,DiscussComponent,NotificationComponent,GuildMemberComponent,AccountComponent,ManualAuditComponent,FileListComponent,ManualReviewPipe,ManualAuditDetailComponent,AbuseReportAuditComponent,IdeaFeedbackComponent,IdeaReplierComponent,AuditableItemListComponent,LivecastDialogComponent,DiscussDialogComponent,NotificationDialogComponent,GuildDialogComponent,ViolatedAuditableItemComponent,GuildmemberListComponent,GuildLivecastFluxTotalComponent,GuildLivecastFluxChargeComponent,GuildLivecastFluxConsumeComponent,WebrtcComponent,SearchPageComponent,RoomPageComponent,SystemComponent,AccountDialogComponent,ExportExcelComponent,ExportExcelDetailComponent,OpenSearchDetailComponent,ShowInfoDetailComponent,SecondTimePipe,HtmlBuildPipe,GuildLivecastDialogComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
            }
          }),
        BrowserAnimationsModule,
        AppRoutingModule,
        SocketIoModule.forRoot(config),
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument(),
        CommonmModule,
        MatProgressBarModule,
        AccordionModule,
        
    ],
    providers: [
        httpInterceptorProviders,
        AuthGuardService,AuthService,LocalStoreService,AppCacheService,PagecontrolService,MessageService,ProductService,ConfirmationService,ImageUploadOssService,LiveService,DialogService,WebsockertService,BasicService,SocketWebrtcService,SystemService
    ],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
