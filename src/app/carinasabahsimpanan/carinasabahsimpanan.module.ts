import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarinasabahsimpananPageRoutingModule } from './carinasabahsimpanan-routing.module';

import { CarinasabahsimpananPage } from './carinasabahsimpanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarinasabahsimpananPageRoutingModule
  ],
  declarations: [CarinasabahsimpananPage]
})
export class CarinasabahsimpananPageModule {}
