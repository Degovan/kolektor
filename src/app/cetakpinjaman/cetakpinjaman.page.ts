import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PrintService } from '../service/print.service';

@Component({
  selector: 'app-cetakpinjaman',
  templateUrl: './cetakpinjaman.page.html',
  styleUrls: ['./cetakpinjaman.page.scss'],
})
export class CetakpinjamanPage implements OnInit {
  data: any;
  bluetoothList:any=[];
  selectedPrinter:any;
  kodeCabang : string;
  device : string;
  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public router: Router,
    public alertCtrl: AlertController,
    private print: PrintService
    ) { 
      this.kodeCabang = window.localStorage.getItem('kodecabang');
      this.device = localStorage.getItem('print');
    }

  ngOnInit() {
  }

  ionViewWillEnter(){
   this.loaddata();
  }

  

  loaddata(){
    this.presentLoading('Mengambil Data...');
    this.http
    .get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/list_setor_pinjaman/' + this.kodeCabang)
    .subscribe((response: any) => {
      this.loadingCtrl.dismiss();
      
        this.data = response;
      
    });
  }

  listPrinter() { 
      this.print.searchBluetoothPrinter()
      .then(resp=>{
        this.bluetoothList=resp;
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
    .get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/struk_pinjaman/' + id)
    .subscribe((response: any) => {
      this.loadingCtrl.dismiss();   
      var myText="\n--------------------------------   Struk Pembayaran Angsuran   \nTanggal : "+ response.tglbayar +"\nNo. Slip : " + + response.idpinjaman;
        var myText1="\n--------------------------------Angsuran Ke : "+ response.angsuranke +"\nJenis       : "+response.ket+"\nPokok       : Rp. "+response.pokok+"\nBasil       : Rp. "+response.basil+"\nTotal       : "+response.jumlah+"\nDenda       : Rp. "+response.denda;
        var myText2="\n--------------------------------      CS WA 085215378518      \n  Informasi Pengaduan Anggota  \n\n        Petugas : Tapos";
        var myText3="\n      Mohon di cek kembali      \n          Terima Kasih";
        var textPrint = myText + myText1 + myText2 + myText3;
        this.print.sendToBluetoothPrinter(this.device, textPrint);
    });
  }
}
