import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MishuellasPageRoutingModule } from './mishuellas-routing.module';

import { MishuellasPage } from './mishuellas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MishuellasPageRoutingModule
  ],
  declarations: [MishuellasPage]
})
export class MishuellasPageModule {}
