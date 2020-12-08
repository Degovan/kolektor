import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetoranPageRoutingModule } from './setoran-routing.module';

import { SetoranPage } from './setoran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetoranPageRoutingModule
  ],
  declarations: [SetoranPage]
})
export class SetoranPageModule {}
