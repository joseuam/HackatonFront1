import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicionServiciosPageRoutingModule } from './edicion-servicios-routing.module';

import { EdicionServiciosPage } from './edicion-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicionServiciosPageRoutingModule
  ],
  declarations: [EdicionServiciosPage]
})
export class EdicionServiciosPageModule {}
