import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdicionServiciosPage } from './edicion-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: EdicionServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdicionServiciosPageRoutingModule {}
