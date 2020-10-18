import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuellaPageRoutingModule } from './huella-routing.module';

import { HuellaPage } from './huella.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuellaPageRoutingModule
  ],
  declarations: [HuellaPage]
})
export class HuellaPageModule {}
