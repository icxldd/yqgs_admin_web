import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbuseReportAuditComponent } from './abuse-report-audit/abuse-report-audit.component';
import { IdeaFeedbackComponent } from './idea-feedback/idea-feedback.component';
import { ManualAuditComponent } from './manual-audit/manual-audit.component';

const routes: Routes = [
  {
    path: 'manual-audit',
    component: ManualAuditComponent
},{
  path:'abuse-report-audit',
  component:AbuseReportAuditComponent
}
,{
  path:'idea-feedback',
  component:IdeaFeedbackComponent
},
{ path: '', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualReviewRoutesModule { }

