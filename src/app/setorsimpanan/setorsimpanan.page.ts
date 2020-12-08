import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Setorsimpanan } from '../models/setorsimpanan';
import { AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-setorsimpanan',
  templateUrl: './setorsimpanan.page.html',
  styleUrls: ['./setorsimpanan.page.scss'],
})
export class SetorsimpananPage implements OnInit {

  id: any;
  data: any;
  simpanan: any;
  form: any;
  constructor(private router: Router, private route : ActivatedRoute, public http: HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController) { 
    this.form = new Setorsimpanan();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.idanggota;
        this.http
        .get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/list_simpananjenis/' + this.id.id)
        .subscribe((resp: any) => {
          this.simpanan = resp;
        });

        this.http
        .get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/detailnasabah/' + this.id.id)
        .subscribe((response: any) => {
          this.data = response;
        });
      }
    });
  }

  ngOnInit() {    
  }


  simpansetoran(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    if(!this.form.jenis ){
      this.presentAlert('Pilih Jenis Simpanan');
    }else if(!this.form.jumlah){
      this.presentAlert('Masukkan Jumlah Setoran');
    }else if(!this.form.keterangan){
      this.presentAlert('Masukkan Keterangan');
    }else{
      this.presentLoading('Proses Simpan...');
      this.http
      .get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/simpan_setor_simpanan/' + this.id.id + '/' + window.localStorage.getItem('iduser') + '/' + this.form.jenis + '/' + this.form.jumlah + '/' + this.form.keterangan + '/' + window.localStorage.getItem('nama') + '/' + window.localStorage.getItem('kodepusat') + '/' + window.localStorage.getItem('kodecabang') + '/' + window.localStorage.getItem('username') )
     /* this.http
      .post(https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/simpan_setor_simpanan/',{
        'idangg': this.id.id,
        'idkolektor': window.localStorage.getItem('iduser'),
        'usernamekol': window.localStorage.getItem('username'),
        'jenis': this.form.jenis,
        'jumlah': this.form.jumlah,
        'keterangan': this.form.keterangan,
        'tanggal': this.form.tanggal,
        'namakolektor': window.localStorage.getItem('nama'),
        'kodepusat': window.localStorage.getItem('kodepusat'),
        'kodecabang': window.localStorage.getItem('kodecabang')
      }, httpOptions)*/
      .subscribe((response: any) => {
        this.loadingCtrl.dismiss();
        if(response.code === 200){
          this.presentAlert(response.msg);
          
          this.router.navigate(['/setoran']);
        }else{
          this.presentAlert(response.msg);
        }
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

  convert(event: any) {
    console.log('old:', this.form.jumlah);
    this.form.jumlah = this.currencyFormatted(event.target.value);
    console.log('new:', this.form.jumlah);
  }

  currencyFormatted(amount:string) {

    var formatedValue = amount;
    var real = '';
    var cents = '';
    var temp = [];
    var i = 0;
    var j = 0;
    var k = 0;
  
    formatedValue = this.clearString(formatedValue.toString(), "0123456789");
  
    if(formatedValue.length > 3) {
  
      real = formatedValue.substr(0, formatedValue.length - 3);
      real = "" + parseInt(real, 10);
      cents = formatedValue.substr(formatedValue.length - 3, 3);
  
      if(real.length > 3) {
        temp = [];
        for(i = real.length - 1, j = 1, k = 0; i > 0 ; i--, j++) {
          if((j % 3) == 0) {
            temp.push(real.substr(i, 3));
            k++;
          }
        }
        temp.reverse();
        real = real.substr(0, real.length - (3 * k)) + '.' + temp.join('.');
      }
      formatedValue = real + '.' + cents;
    }
    return formatedValue;
  }

  clearString(value : string, validCharacters:string) {
    var result = '';
    var index = -1;
    var i = 0;
  
    for(i = 0; i < value.length; i++) {
      index = validCharacters.indexOf(value.charAt(i));
  
     if(index > -1) {
        result += validCharacters.charAt(index);
      }
    }
    return result;
  }
}
