import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data: Login;
  constructor(
    public apiService: ApiService,
    public router: Router,
    public alertCtrl: AlertController,
    public http2: HttpClient,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) { 
    this.data = new Login();
  }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    })
  }


  ngOnInit() {
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

  
  prosesLogin(){
    if(!this.data.username){
      this.presentAlert('Silahkan Masukkan Username anda.');
    }else if(!this.data.password){
      this.presentAlert('Silahkan Masukkan password anda.');
    }else{
      this.presentLoading('Proses Login...');
      this.http2.get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/cek_login/' + this.data.username + '/' + this.data.password).subscribe((response : any) => {
        this.loadingCtrl.dismiss();
        if(response.code === 200){
          
          localStorage.setItem('username',this.data.username);
          localStorage.setItem('islogin','true');
          
          this.router.navigate(['/home']);
        }else{
          this.presentAlert('Login Gagal! Periksa kembali Username dan Password anda');
        }
    });
      
    }
  }

  async presentToast(pesan: string) {
    const toast = await this.toastCtrl.create({
      message: pesan,
      duration: 2000
    });
    toast.present();
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
