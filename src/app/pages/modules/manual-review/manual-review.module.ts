import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManualReviewComponent } from './manual-review.component';
import { ManualReviewRoutesModule } from './manual-review.routing';

@NgModule({
  imports: [
    CommonModule,ManualReviewRoutesModule
  ],
  declarations: [ManualReviewComponent]
})
export class ManualReviewModule { }
