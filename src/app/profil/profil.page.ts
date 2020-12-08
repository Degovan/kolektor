import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Profil } from '../models/profil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  datauser : any;
  form : any;
  usernamex : any;
  constructor(public http: HttpClient, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public apiservice: ApiService, public router: Router) {
    let username = window.localStorage.getItem('username'); 
    this.apiservice.detailuser(username).subscribe((response: any) => {
      this.datauser = response;
    });
    this.usernamex = username;
    this.form = new Profil();
  }

  ngOnInit() {
  }

  simpan(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
      this.presentLoading('Menyimpan Data');
      this.http
      .post('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/simpanprofil',{
        'nama' : this.form.namauser,
        'password' : this.form.password,
        'iduser': window.localStorage.getItem('iduser')
      },httpOptions)
      .subscribe((response: any) => {
        this.loadingCtrl.dismiss();
        if(response.code === 200){
          this.presentToast('Profil Anda berhasil disimpan');
          window.localStorage.removeItem('iduser');
          window.localStorage.removeItem('islogin');
          window.localStorage.removeItem('username');
          this.router.navigate(['login']);
        }else{
          this.presentToast('Terjadi Kesalahan! Gagal menyimpan data.');
        }
      });
    
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
