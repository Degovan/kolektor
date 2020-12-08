import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailnasabahPageRoutingModule } from './detailnasabah-routing.module';

import { DetailnasabahPage } from './detailnasabah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailnasabahPageRoutingModule
  ],
  declarations: [DetailnasabahPage]
})
export class DetailnasabahPageModule {}
