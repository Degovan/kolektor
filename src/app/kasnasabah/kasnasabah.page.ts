import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-kasnasabah',
  templateUrl: './kasnasabah.page.html',
  styleUrls: ['./kasnasabah.page.scss'],
})
export class KasnasabahPage implements OnInit {

  userData : any;
  itemListData = [];
  page_number = 0;
  page_limit = 8;

  constructor(public http: HttpClient, public router: Router,public loadingCtrl: LoadingController) {
    let username = window.localStorage.getItem('username');
    this.http.get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/detailuser/' + username).subscribe((response: any) => {
      this.userData = response;
    });
   }

  ngOnInit() {
    this.loadNasabah(false, "");
  }


  loadNasabah(isFirstLoad, event){
    this.presentLoading('Mengambil Data Nasabah...');
    let kolektor : string = window.localStorage.getItem('iduser');
    this.http.get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/kas_simpanan/' + kolektor + '/' + this.page_limit + '/' + this.page_number)
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

  async presentLoading(pesan: string) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: pesan,
      duration: 2000
    });
    await loading.present();
  }

}
