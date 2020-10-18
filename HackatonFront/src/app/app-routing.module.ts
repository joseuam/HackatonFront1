import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'inicio/principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicio/informacion',
    loadChildren: () => import('./informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'edicion-servicios',
    loadChildren: () => import('./edicion-servicios/edicion-servicios.module').then( m => m.EdicionServiciosPageModule)
  },
  {
    path: 'inicio/mishuellas',
    loadChildren: () => import('./MyHuella/mishuellas/mishuellas.module').then( m => m.MishuellasPageModule)
  },
  {
    path: 'huella/:id',
    loadChildren: () => import('./MyHuella/huella/huella.module').then( m => m.HuellaPageModule)
  },  {
    path: 'modal',
    loadChildren: () => import('./modal/modal/modal.module').then( m => m.ModalPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
