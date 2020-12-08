import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-carinasabahsimpanan',
  templateUrl: './carinasabahsimpanan.page.html',
  styleUrls: ['./carinasabahsimpanan.page.scss'],
})
export class CarinasabahsimpananPage implements OnInit {

  data: any;
  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
      }
    });
  }

  ngOnInit() {
  }

  detailnasabah(id: number){
    let navigationExtras : NavigationExtras = {
      state : {
        idanggota : {id: id}
      }
    };

    this.router.navigate(['/setorsimpanan'],navigationExtras);
  }

}
