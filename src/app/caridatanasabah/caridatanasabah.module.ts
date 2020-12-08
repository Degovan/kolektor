import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaridatanasabahPageRoutingModule } from './caridatanasabah-routing.module';

import { CaridatanasabahPage } from './caridatanasabah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaridatanasabahPageRoutingModule
  ],
  declarations: [CaridatanasabahPage]
})
export class CaridatanasabahPageModule {}
