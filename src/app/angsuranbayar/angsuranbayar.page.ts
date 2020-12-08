import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Simpanan } from '../models/simpanan';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-angsuranbayar',
  templateUrl: './angsuranbayar.page.html',
  styleUrls: ['./angsuranbayar.page.scss'],
})
export class AngsuranbayarPage implements OnInit {
  data: any;
  constructor(private http: HttpClient, public router: Router,public loadingCtrl: LoadingController, public toastCtrl: ToastController,public alertCtrl: AlertController) { 
    this.data = new Simpanan();
  }

  ngOnInit() {
  }

  cari(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    if(!this.data.nama && !this.data.alamat && !this.data.ktp){
      this.presentAlert('Silahkan masukkan minimal 1 paramater pencarian');
    }else{
      this.presentLoading('Proses Cari Nasabah...');
      this.http.post('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/carinasabahpinjaman',{
        'nama': this.data.nama,
        'alamat': this.data.alamat,
        'ktp': this.data.ktp,
        'kodepusat': window.localStorage.getItem('kodepusat'),
        'kodecabang': window.localStorage.getItem('kodecabang')
      },httpOptions).subscribe((resp: any)=>{
      console.log(resp);

      let navigationExtras : NavigationExtras = {
        state : {
          data : resp
        }
      };
      this.loadingCtrl.dismiss();
      this.router.navigate(['carinasabahpinjaman'],navigationExtras);
      });
    }
  }


  async presentAlert(pesan : string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Informasi Sistem',
      message: pesan,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading(pesan: string) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: pesan,
      duration: 2000
    });
    await loading.present();
  }
}
