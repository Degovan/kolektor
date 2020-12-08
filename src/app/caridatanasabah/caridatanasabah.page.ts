import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Simpanan } from '../models/simpanan';

@Component({
  selector: 'app-caridatanasabah',
  templateUrl: './caridatanasabah.page.html',
  styleUrls: ['./caridatanasabah.page.scss'],
})
export class CaridatanasabahPage implements OnInit {
  form: any;
  data: any;

  constructor(
    private http: HttpClient,
    public router: Router,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public route: ActivatedRoute
  ) { 
    this.form = new Simpanan()
  }

  ngOnInit() {
  }

  cari(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    if(!this.form.nama && !this.form.alamat && !this.form.ktp){
      this.presentAlert('Silahkan masukkan minimal 1 paramater pencarian');
    }else{
      this.presentLoading('Proses Cari Nasabah...');
      this.http.post('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/carinasabah/' ,{
        'nama': this.form.nama,
        'alamat': this.form.alamat,
        'ktp': this.form.ktp,
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
      this.router.navigate(['hasilcarinasabah'], navigationExtras);
      });
    }
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

  async presentLoading(pesan: string) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: pesan,
      duration: 2000
    });
    await loading.present();
  }
}
