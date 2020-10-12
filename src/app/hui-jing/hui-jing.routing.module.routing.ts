

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UeClientComponent } from './components/ue-client/ue-client.component';
import { UeServerComponent } from './components/ue-server/ue-server.component';
import { AssestUploadComponent } from './components/assest-upload/assest-upload.component';
import { AssestDownloadComponent } from './components/assest-download/assest-download.component';

const routes: Routes = [
    {
        path: 'ue-client',
        component: UeClientComponent
    },
    {
      path: 'ue-server',
      component: UeServerComponent
  },
  {
    path: 'assest-upload',
    component: AssestUploadComponent
  },
  {
    path: 'assest-download',
    component: AssestDownloadComponent
  },
    { path: '', pathMatch: 'full', redirectTo: 'sili' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HuiJingRoutingModule { }

