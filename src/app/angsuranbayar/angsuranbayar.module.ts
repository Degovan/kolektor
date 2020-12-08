import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngsuranbayarPageRoutingModule } from './angsuranbayar-routing.module';

import { AngsuranbayarPage } from './angsuranbayar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngsuranbayarPageRoutingModule
  ],
  declarations: [AngsuranbayarPage]
})
export class AngsuranbayarPageModule {}
