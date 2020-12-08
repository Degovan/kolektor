import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-carinasabahpinjaman',
  templateUrl: './carinasabahpinjaman.page.html',
  styleUrls: ['./carinasabahpinjaman.page.scss'],
})
export class CarinasabahpinjamanPage implements OnInit {

  data: any;
  constructor(private router: Router,
    public alertCtrl: AlertController, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
      }
    });
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


  detailnasabah(id: number, pinjaman: number) {
    if (pinjaman > 0) {
      let navigationExtras: NavigationExtras = {
        state: {
          idanggota: { id: id }
        }
      };

      this.router.navigate(['/setorangsuran'], navigationExtras);
    }
    else {
      this.presentAlert('Nasabah tidak memiliki pinjaman');
    }
  }

}
