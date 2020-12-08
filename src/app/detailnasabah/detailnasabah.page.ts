import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-detailnasabah',
  templateUrl: './detailnasabah.page.html',
  styleUrls: ['./detailnasabah.page.scss'],
})
export class DetailnasabahPage implements OnInit {

  data: any;
  nasabah : any;
  long: any;
  lat: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public http: HttpClient,
    private geolocation: Geolocation,
    public alertCtrl: AlertController) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.idanggota;
      }
    });


    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loadanggota();
  }

  loadanggota(){
    this.presentLoading('Mengambil Data Nasabah...');
    this.http.get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/detailnasabahfull/' + this.data.id).subscribe((response: any) => {
      this.loadingCtrl.dismiss();
      this.nasabah = response;
    });
  }


  updatelokasi(){
    this.presentLoading('Mengupdate lokasi...');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const iduser = this.data.id;
    this.http.post('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/updatenasabah/',
    {
      idanggota : iduser,
      lat: this.lat,
      lng: this.long},
      httpOptions)
      .subscribe((response: any) => {
        this.loadingCtrl.dismiss();
        if(response.code === 200){
          this.presentAlert('Lokasi nasabah berhasil terupdate');
          this.router.navigateByUrl('/datanasabah');
        }else{
          this.presentAlert('Terjadi Kesalahan! Gagal mengupdate lokasi.');
          this.router.navigate(['home']);
        }
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
