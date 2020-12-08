import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HasilcarinasabahPageRoutingModule } from './hasilcarinasabah-routing.module';

import { HasilcarinasabahPage } from './hasilcarinasabah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HasilcarinasabahPageRoutingModule
  ],
  declarations: [HasilcarinasabahPage]
})
export class HasilcarinasabahPageModule {}
