import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pinjaman } from '../models/pinjaman';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-formbayarangsuran',
  templateUrl: './formbayarangsuran.page.html',
  styleUrls: ['./formbayarangsuran.page.scss'],
})
export class FormbayarangsuranPage implements OnInit {
  idpinjaman : any;
  angsuranke: any;
  jumlah : number;
  tempo : Date;
  basil : number;
  bayar : string;
  angsuranbln : number;
  biayareset : number;
  biayakolektor : number;
  form: any;
  jeniskas: any;
  tanggal : string;
  keterangan :string;
  kas : number;
  sisatagihan : number;
  bayar_pokok : number;

  constructor(private router: Router, private route : ActivatedRoute, public http: HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController) { 
    this.form = new Pinjaman();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        let dataPinjam = this.router.getCurrentNavigation().extras.state;
        this.idpinjaman = dataPinjam.idpinjaman;
        this.angsuranke = dataPinjam.angsuranke;
        this.jumlah = dataPinjam.jumlah;
        this.tempo = dataPinjam.tempo;
        this.basil = dataPinjam.basil;
        this.bayar = dataPinjam.jumlah;
        this.angsuranbln = dataPinjam.angsuranbln;
        this.biayareset = dataPinjam.biayareset;        
        this.biayakolektor = dataPinjam.biayakolektor;
        this.sisatagihan = dataPinjam.sisatagihan;
        this.bayar_pokok = dataPinjam.bayarpokok;
        this.tanggal = new Date().toJSON().split('T')[0];    
        debugger    
      }
      let kodecabang  = window.localStorage.getItem('kodecabang');
      this.http.get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/jenis_kas/' + kodecabang)
      .subscribe((response: any)=>{
        this.jeniskas = response;
      });
    });
  }

  ngOnInit() {    
  }


  simpanangsuran(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    if(!this.kas ){
      this.presentAlert('Pilih Kas');
    }else if(!this.keterangan){
      this.presentAlert('Masukkan Keterangan');
    }else{
      this.presentLoading('Proses Simpan...');
       this.http.get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/simpan_setor_pinjaman'+ '/' + this.tanggal + '/' + this.idpinjaman + '/' + this.angsuranke + '/' + this.bayar + '/' + this.basil + '/' + this.bayar_pokok + '/' + this.biayareset + '/' + this.biayakolektor + '/' + this.kas + '/' + window.localStorage.getItem('kodecabang') + '/' + this.keterangan + '/' +  window.localStorage.getItem('username') + '/' + window.localStorage.getItem('kodepusat')+ '/' + window.localStorage.getItem('iduser'))
       .subscribe((response: any) => {
        this.loadingCtrl.dismiss();
        if(response.code === 200){
          this.presentAlert(response.msg); 
          this.router.navigate(['angsuranbayar']);
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
    console.log('old:', this.bayar);
    this.bayar = this.currencyFormatted(event.target.value);
    console.log('new:', this.bayar);
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
