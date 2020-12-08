import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CetaksimpananPageRoutingModule } from './cetaksimpanan-routing.module';

import { CetaksimpananPage } from './cetaksimpanan.page';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { PrintService } from '../service/print.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CetaksimpananPageRoutingModule
  ],
  declarations: [CetaksimpananPage],
  providers : [PrintService, BluetoothSerial]
})
export class CetaksimpananPageModule {}
