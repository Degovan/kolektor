import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetorangsuranPageRoutingModule } from './setorangsuran-routing.module';

import { SetorangsuranPage } from './setorangsuran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetorangsuranPageRoutingModule
  ],
  declarations: [SetorangsuranPage]
})
export class SetorangsuranPageModule {}
