import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KaspinjamanPageRoutingModule } from './kaspinjaman-routing.module';

import { KaspinjamanPage } from './kaspinjaman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KaspinjamanPageRoutingModule
  ],
  declarations: [KaspinjamanPage]
})
export class KaspinjamanPageModule {}
