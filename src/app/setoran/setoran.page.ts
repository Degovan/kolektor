import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Simpanan } from '../models/simpanan';


@Component({
  selector: 'app-setoran',
  templateUrl: './setoran.page.html',
  styleUrls: ['./setoran.page.scss'],
})
export class SetoranPage implements OnInit {
data : Simpanan;

  constructor(
    public router: Router,
    public alertCtrl: AlertController,
    public http: HttpClient,
    public loadingCtrl: LoadingController) {
      this.data =  new Simpanan();
     }

    

  ngOnInit() {
  }

  ionViewWillEnter(){
   this.data.nama = "";
   this.data.alamat = "";
   this.data.ktp = "";
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
      this.http.post('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/carinasabahsimpanan/',{
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
      this.router.navigate(['carinasabahsimpanan'],navigationExtras);
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
