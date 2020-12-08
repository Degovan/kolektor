import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CetakpinjamanPageRoutingModule } from './cetakpinjaman-routing.module';

import { CetakpinjamanPage } from './cetakpinjaman.page';


import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { PrintService } from '../service/print.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CetakpinjamanPageRoutingModule
  ],
  declarations: [CetakpinjamanPage],
  providers : [PrintService, BluetoothSerial]
})
export class CetakpinjamanPageModule {}
