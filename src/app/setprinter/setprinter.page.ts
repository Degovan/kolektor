import { Component, OnInit } from '@angular/core';
import { PrintService } from '../service/print.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-setprinter',
  templateUrl: './setprinter.page.html',
  styleUrls: ['./setprinter.page.scss'],
})
export class SetprinterPage implements OnInit {

  bluetoothList:any=[];
  selectedPrinter:any;
  constructor(public toastCtrl: ToastController, private print: PrintService) {
      this.getBluetoothList();
    }

    //This will list all of your bluetooth devices
    listPrinter() { 
      this.print.searchBluetoothPrinter()
       .then(resp=>{
   
        //List of bluetooth device list
        this.bluetoothList=resp;
    });
}

  ngOnInit() {
  }

  getBluetoothList(): void {
    this.bluetoothList = [];
    this.print.searchBluetoothPrinter().then(data => {
      this.bluetoothList = data;
    }, err => alert(err));
  
  }


//This will print
printStuff()
{  
   //The text that you want to print
   var myText="\n--------------------------------   Struk Pembayaran Angsuran   \x20\nTanggal : 10 Oktober 2020 \nNo. Slip : 1";
   var myText1="\n--------------------------------Angsuran Ke : 1\nJenis : Angsuran\nPokok : Rp. 300,000\nBasil : Rp. 33,400\nTotal : Rp. 1,100,00\nDenda : Rp. 0";
   var myText2="\n--------------------------------      CS WA 085215378518      \n  Informasi Pengaduan Anggota  \n\n          Petugas : Tapos";
   var myText3="\n      Mohon di cek kembali      \n          Terima Kasih";
   var textPrint = myText + myText1 + myText2 + myText3;
   this.print.sendToBluetoothPrinter(this.selectedPrinter, textPrint);
}

async presentToast(pesan: string) {
  const toast = await this.toastCtrl.create({
    message: pesan,
    duration: 2000
  });
  toast.present();
}

save()
{  
  this.presentToast('Data Telah disimpan');
  localStorage.setItem('print', this.selectedPrinter);
}

}
