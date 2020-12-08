import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetanasabahPageRoutingModule } from './petanasabah-routing.module';

import { PetanasabahPage } from './petanasabah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetanasabahPageRoutingModule
  ],
  declarations: [PetanasabahPage]
})
export class PetanasabahPageModule {}
