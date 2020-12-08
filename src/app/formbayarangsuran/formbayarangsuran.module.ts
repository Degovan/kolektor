import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormbayarangsuranPageRoutingModule } from './formbayarangsuran-routing.module';

import { FormbayarangsuranPage } from './formbayarangsuran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormbayarangsuranPageRoutingModule
  ],
  declarations: [FormbayarangsuranPage]
})
export class FormbayarangsuranPageModule {}
