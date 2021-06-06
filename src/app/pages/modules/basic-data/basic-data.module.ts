import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCategoryTreeComponent } from './pages/data-category-tree/data-category-tree.component';
import { BasicDataRoutingModule } from './basic-data.routing';
import { BasicListComponent } from './components/basic-list/basic-list.component';
import { CommonmModule } from '@app/common/common.module';
import { BasicListAddEditComponent } from './components/basic-list-add-edit/basic-list-add-edit.component';

@NgModule({
  imports: [
    CommonModule,BasicDataRoutingModule,CommonmModule
  ],
  declarations: [DataCategoryTreeComponent,BasicListComponent,BasicListAddEditComponent]
})
export class BasicDataModule { }
