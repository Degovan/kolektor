import { Component } from '@angular/core';
import { Login } from '../models/login';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userData: any;
  items: any;
  result: JSON;
  allData: any;
  constructor(public apiService: ApiService, public router: Router, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.userData = [];
    this.loadData();
  }

  
  loadData(){
    
    const username = window.localStorage.getItem('username');
    this.presentLoading('Proses Simpan...');
    this.apiService.detailuser(username).subscribe((response: any) => {
      this.userData = response;
      this.items = JSON.stringify(this.userData);
      this.allData = JSON.parse(this.items);
      
      window.localStorage.setItem('iduser',this.allData[0]['iduser']);
      window.localStorage.setItem('nama',this.allData[0]['nama']);
      window.localStorage.setItem('kodepusat',this.allData[0]['kodepusat']);
      window.localStorage.setItem('kodecabang',this.allData[0]['kodecabang']);
      this.loadingCtrl.dismiss();
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

  logout(){
    this.presentToast('Anda berhasil Logout dari Sistem');
      window.localStorage.removeItem('iduser');
      window.localStorage.removeItem('nama');
      window.localStorage.removeItem('kodepusat');
      window.localStorage.removeItem('kodecabang');
      window.localStorage.removeItem('islogin');
      window.localStorage.removeItem('username');
    this.router.navigate(['login']);
  }

  async presentToast(pesan: string) {
    const toast = await this.toastCtrl.create({
      message: pesan,
      duration: 2000
    });
    toast.present();
  }

}
