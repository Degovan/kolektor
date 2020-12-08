import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetprinterPageRoutingModule } from './setprinter-routing.module';

import { SetprinterPage } from './setprinter.page';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { PrintService } from '../service/print.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetprinterPageRoutingModule
  ],
  declarations: [SetprinterPage],
  providers : [PrintService, BluetoothSerial]
})
export class SetprinterPageModule {}
