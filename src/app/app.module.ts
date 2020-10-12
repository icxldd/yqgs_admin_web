import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './pages/services/auth-guard.service';
import { AuthService } from './pages/services/auth.service';
import { LocalStoreService } from './pages/services/local-store.service';
import { AppCacheService } from './pages/services/app-cache.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { HomeComponent } from './pages/components/Home/Home.component';
import { LoginComponent } from './pages/components/Login/Login.component';
import {AccordionModule} from 'primeng/accordion';   

@NgModule({
    declarations: [
        AppComponent,HomeComponent,LoginComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
        DialogModule
    ],
    providers: [
        AuthGuardService,AuthService,LocalStoreService,AppCacheService
    ],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
