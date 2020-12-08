import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-petanasabah',
  templateUrl: './petanasabah.page.html',
  styleUrls: ['./petanasabah.page.scss'],
})
export class PetanasabahPage implements OnInit {

  map: GoogleMap;
  loading: any;
  long: any;
  lat: any;
  anggota: any;
  nasabah: any;
  longNasabah: any;
  latNasabah: any;

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform,
    public geolocation: Geolocation,
    public router: Router,
    public route: ActivatedRoute,
    public apiservice: ApiService,
    public http: HttpClient) { 
      this.geolocation.getCurrentPosition().then((resp) => {
        this.lat = resp.coords.latitude;
        this.long = resp.coords.longitude;
       }).catch((error) => {
         console.log('Error getting location', error);
       });

      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.anggota = this.router.getCurrentNavigation().extras.state.idanggota;
          this.latNasabah = this.router.getCurrentNavigation().extras.state.lat;
          this.longNasabah = this.router.getCurrentNavigation().extras.state.lng;
          console.log('Lat : ' +this.latNasabah + ' - Long : ' + this.longNasabah);
        }
      });

      this.http
      .get('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/detailnasabahfull/' + this.anggota)
      .subscribe((response: any) => {
        this.nasabah = response;
      });
    }

    async ngOnInit() {
      // Since ngOnInit() is executed before `deviceready` event,
      // you have to wait the event.
      await this.platform.ready();
      await this.loadMap();
    }
  
    loadMap() {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: {
            lat: parseFloat(this.latNasabah),
            lng: parseFloat(this.longNasabah)
          },
          zoom: 18,
          tilt: 30
        }
      });

      // Get the location of you
      this.map.getMyLocation().then((location: MyLocation) => {
      console.log(JSON.stringify(location, null , 2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30
      });

      // add a marker
      const marker: Marker = this.map.addMarkerSync({
        title: '<b>' + this.nasabah.nama + '</b>',
        snippet: 'Alamat : ' + this.nasabah.alamat,
        position: {
          lat: parseFloat(this.latNasabah),
          lng: parseFloat(this.longNasabah)
        },
        draggable : true,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      marker.showInfoWindow();
       // show the infoWindow
      console.log(marker.getPosition().lat + ' long : ' + marker.getPosition().lng);

      // If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe(() => {
      this.presentLoading('Menyimpan posisi Nasabah');
      this.lat = marker.getPosition().lat;
      this.long = marker.getPosition().lng;

      this.http.post('https://kspwahyuartasejahtera.co.id/mobileapi/kolektor/simpanposisi', {
        idanggota: this.anggota.id,
        lat: parseFloat(this.lat),
        lng: parseFloat(this.long)},
        httpOptions)
        .subscribe((response: any) => {
          this.loadingCtrl.dismiss();
          if(response.code === 200){
            this.showToast('Posisi Nasabah berhasil disimpan');
          }else{
            this.showToast('Terjadi Kesalahan! Posisi Nasabah gagal disimpan');
          }
        });

      });
    })
    .catch(err => {
      
      this.showToast(err.error_message);
    });

    }

    async showToast(message: string) {
      const toast = await this.toastCtrl.create({
        message: message,
        duration: 2000,
        position: 'middle'
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
