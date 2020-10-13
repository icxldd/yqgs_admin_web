import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing.module.routing';
import { AccountService } from './services/account.service';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    
  ],
  declarations: [PagesComponent],
  providers:[AccountService]
})
export class PagesModule { }
