import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-setorangsuran',
  templateUrl: './setorangsuran.page.html',
  styleUrls: ['./setorangsuran.page.scss'],
})
export class SetorangsuranPage implements OnInit {
  id: any;
  data: any;
  angsuran: any;
  form: any;
  constructor(public router: Router, public route: ActivatedRoute, public http: HttpClient) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.id = this.router.getCurrentNavigation().extras.state.idanggota;
        this.http
        .get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/list_angsuran/' + this.id.id)
        .subscribe((resp: any) => {
          this.angsuran = resp;
        });

        this.http
        .get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/detailnasabahpinjaman/' + this.id.id)
        .subscribe((response: any) => {
          this.data = response;
        });

       
      }
    });

    
  }

  ngOnInit() {
  }


  bayarangsuran(idpinjaman: number,angske:number, tempo:Date, jumlah:number, basil: number, biayareset: number, angsbulan: number, lama:number, biayakolektor:number, sisatagihan:number, bayar_pokok : number){
    
    let navigationExtras : NavigationExtras = {
      state : {
        idpinjaman: idpinjaman,
        angsuranke : angske,
        tempo: tempo,
        jumlah : jumlah,
        basil: basil,
        biayareset : biayareset,
        angsuranbln: angsbulan,        
        biayakolektor :biayakolektor,
        lama: lama,
        sisatagihan : sisatagihan,
        bayarpokok : bayar_pokok
      }
    };

    this.router.navigate(['/formbayarangsuran'],navigationExtras);
  }

}
