import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarinasabahpinjamanPageRoutingModule } from './carinasabahpinjaman-routing.module';

import { CarinasabahpinjamanPage } from './carinasabahpinjaman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarinasabahpinjamanPageRoutingModule
  ],
  declarations: [CarinasabahpinjamanPage]
})
export class CarinasabahpinjamanPageModule {}
