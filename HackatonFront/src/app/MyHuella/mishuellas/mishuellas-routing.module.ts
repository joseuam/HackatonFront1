import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MishuellasPage } from './mishuellas.page';

const routes: Routes = [
  {
    path: '',
    component: MishuellasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MishuellasPageRoutingModule {}
