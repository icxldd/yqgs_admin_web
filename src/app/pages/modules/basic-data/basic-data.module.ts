import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCategoryTreeComponent } from './pages/data-category-tree/data-category-tree.component';
import { BasicDataRoutingModule } from './basic-data.routing';
import { BasicListComponent } from './components/basic-list/basic-list.component';
import { CommonmModule } from '@app/common/common.module';
import { BasicListAddEditComponent } from './components/basic-list-add-edit/basic-list-add-edit.component';
import { DataDictionaryComponent } from './pages/data-dictionary/data-dictionary.component';
import { DictionaryTreeComponent } from './components/dictionary-tree/dictionary-tree.component';
import { DataDictionaryEditComponent } from './components/data-dictionary-edit/data-dictionary-edit.component';
import { ChinaTime2Pipe } from './pipes/china-time2.pipe';
import { RichHtmlComponent } from './components/rich-html/rich-html.component';
@NgModule({
  imports: [
    CommonModule,BasicDataRoutingModule,CommonmModule
  ],
  declarations: [DataCategoryTreeComponent,BasicListComponent,BasicListAddEditComponent,DataDictionaryComponent,DictionaryTreeComponent,DataDictionaryEditComponent,ChinaTime2Pipe,RichHtmlComponent]
})
export class BasicDataModule { }
