import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetorsimpananPageRoutingModule } from './setorsimpanan-routing.module';

import { SetorsimpananPage } from './setorsimpanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetorsimpananPageRoutingModule
  ],
  declarations: [SetorsimpananPage]
})
export class SetorsimpananPageModule {}
