import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hasilcarinasabah',
  templateUrl: './hasilcarinasabah.page.html',
  styleUrls: ['./hasilcarinasabah.page.scss'],
})
export class HasilcarinasabahPage implements OnInit {
  data: any;

  constructor(
    private http: HttpClient,
    public router: Router,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public route: ActivatedRoute
  ) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
      }
    });
  }

  ngOnInit() {
  }

  detailnasabah(id:number){
    let navigationExtras : NavigationExtras = {
      state : {
        idanggota : {id : id}
      }
    };

    this.router.navigate(['detailnasabah'],navigationExtras);
  }


  carinasabah(){
    this.router.navigate(['caridatanasabah']);
  }

}