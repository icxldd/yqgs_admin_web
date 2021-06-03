import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCategoryTreeComponent } from './pages/data-category-tree/data-category-tree.component';
import { BasicDataRoutingModule } from './basic-data.routing';

@NgModule({
  imports: [
    CommonModule,BasicDataRoutingModule
  ],
  declarations: [DataCategoryTreeComponent]
})
export class BasicDataModule { }
