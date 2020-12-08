import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-datanasabah',
  templateUrl: './datanasabah.page.html',
  styleUrls: ['./datanasabah.page.scss'],
})
export class DatanasabahPage implements OnInit {

  itemListData = [];
  page_number = 0;
  page_limit = 8;

  constructor(public http: HttpClient, public router: Router,public loadingCtrl: LoadingController, public geolocation: Geolocation) {
    
   }

  ngOnInit() {
    this.loadNasabah(false, "");
  }


  refreshnasabah(){
    this.loadNasabah(false,"");
  }

  loadNasabah(isFirstLoad, event){
    this.presentLoading('Mengambil Data Nasabah...');
    let kodepusat : string = window.localStorage.getItem('kodepusat');
    let kodecabang : string = window.localStorage.getItem('kodecabang');
    this.http.get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/datanasabah/' + kodepusat + '/' + kodecabang + '/' + this.page_limit + '/' + this.page_number)
    .subscribe((data: any ) => {
      this.loadingCtrl.dismiss();
      for (let i = 0; i < data.length; i++) {
        this.itemListData.push(data[i]);
      }

      if (isFirstLoad)
        event.target.complete();

      this.page_number++;
      console.log(this.itemListData);
    },error => {
      console.log(error);
    });
  }

  

  doInfinite(event) {
    this.loadNasabah(true, event);
  }


  detailnasabah(id:number){
    let navigationExtras : NavigationExtras = {
      state : {
        idanggota : {id : id}
      }
    };

    this.router.navigate(['detailnasabah'],navigationExtras);
  }


  petanasabah(id:number, lat, lng){
    let navigationExtras : NavigationExtras = {
      state : {
        idanggota : id, 
        lat: lat, 
        lng: lng
      }
    };

    this.router.navigate(['petanasabah'],navigationExtras);
  }


  carinasabah(){
    this.router.navigate(['caridatanasabah']);
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
