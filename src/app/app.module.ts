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
import {PasswordModule} from 'primeng/password';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PagecontrolService } from './pages/services/pagecontrol.service';
import { AuthInterceptorService } from './pages/services/AuthInterceptor.service';
import { ImageUploadOssService } from './pages/services/ImageUploadOss.service';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService } from './pages/services/AppConfigService';
import {ProductService} from './pages/services/product.service'







import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { Post_Component } from './pages/components/post_/post_.component';
import { LiveModule } from './live/live.module';



import {MatToolbarModule} from '@angular/material/toolbar';
import { LiveComponent } from './live/live.component';

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
        AppComponent,LoginComponent,Post_Component,LiveComponent
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
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument(),
        AccordionModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        DialogModule,
        PasswordModule,
        MenubarModule,MenuModule,ToastModule,CalendarModule,SliderModule,MultiSelectModule,ContextMenuModule,DropdownModule,ProgressBarModule,FileUploadModule,ToolbarModule,RatingModule,RadioButtonModule,InputNumberModule,ConfirmDialogModule,InputTextareaModule,LiveModule,MatToolbarModule
    ],
    providers: [
        httpInterceptorProviders,
        AuthGuardService,AuthService,LocalStoreService,AppCacheService,PagecontrolService,MessageService,ProductService,ConfirmationService,ImageUploadOssService
    ],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
