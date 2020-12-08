import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KasnasabahPageRoutingModule } from './kasnasabah-routing.module';

import { KasnasabahPage } from './kasnasabah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KasnasabahPageRoutingModule
  ],
  declarations: [KasnasabahPage]
})
export class KasnasabahPageModule {}
