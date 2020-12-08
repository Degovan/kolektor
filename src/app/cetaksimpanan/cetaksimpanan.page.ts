import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PrintService } from '../service/print.service';

@Component({
  selector: 'app-cetaksimpanan',
  templateUrl: './cetaksimpanan.page.html',
  styleUrls: ['./cetaksimpanan.page.scss'],
})
export class CetaksimpananPage implements OnInit {

  data: any;
  device : string;
  constructor(public http: HttpClient, public loadingCtrl: LoadingController, public toastCtrl: ToastController, 
    public router: Router, public alertCtrl: AlertController, 
    private print: PrintService) {
      this.device = localStorage.getItem('print'); }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.loaddata();
   }
 
   loaddata(){
     let kodecabang = window.localStorage.getItem('kodecabang');
     this.presentLoading('Mengambil Data...');
     this.http
     .get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/list_setor_simpanan/' + kodecabang)
     .subscribe((response: any) => {
       this.loadingCtrl.dismiss();
       
         this.data = response;
       
     });
   }
 
   async presentLoading(pesan: string) {
     const loading = await this.loadingCtrl.create({
       cssClass: 'my-custom-class',
       message: pesan,
       duration: 2000
     });
     await loading.present();
   }
 
 
   async presentToast(pesan: string) {
     const toast = await this.toastCtrl.create({
       message: pesan,
       duration: 2000
     });
     toast.present();
   }

   printdata(id : string){
    this.presentLoading('Mengambil Data...');
    this.http
    .get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/struk_simpan/' + id)
    .subscribe((response: any) => {
      this.loadingCtrl.dismiss();   
      var myText="\n--------------------------------      Struk Setor Tunai   \nTanggal        : "+ response.tgl +"\nNo. Transaksi  : " + response.no;
        var myText1="\nID Anggota    : "+ response.no_anggota +"\nNama           : "+response.nama+"\nJenis          : "+response.jenis+"\nJumlah Setoran : Rp. "+response.jumlah;
        var myText2="\n--------------------------------Informasi Hubungi Call Center : 021 878454654 \n";
        var myText3="\n      Mohon di cek kembali      \n          Terima Kasih";
        var textPrint = myText + myText1 + myText2 + myText3;
        if(this.device != null)
        {
        this.print.sendToBluetoothPrinter(this.device, textPrint);
        }
        else {
          this.presentAlert("Tidak ada koneksi printer");
        }
    });
  }

  async presentAlert(pesan: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Informasi Sistem',
      message: pesan,
      buttons: ['OK']
    });

    await alert.present();
  }
}
