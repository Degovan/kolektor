import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    /*path: '',
    redirectTo: 'home',
    pathMatch: 'full'*/
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'setoran',
    loadChildren: () => import('./setoran/setoran.module').then( m => m.SetoranPageModule)
  },
  {
    path: 'angsuranbayar',
    loadChildren: () => import('./angsuranbayar/angsuranbayar.module').then( m => m.AngsuranbayarPageModule)
  },
  {
    path: 'petanasabah',
    loadChildren: () => import('./petanasabah/petanasabah.module').then( m => m.PetanasabahPageModule)
  },
  {
    path: 'datanasabah',
    loadChildren: () => import('./datanasabah/datanasabah.module').then( m => m.DatanasabahPageModule)
  },
  {
    path: 'kasnasabah',
    loadChildren: () => import('./kasnasabah/kasnasabah.module').then( m => m.KasnasabahPageModule)
  },
  {
    path: 'kaspinjaman',
    loadChildren: () => import('./kaspinjaman/kaspinjaman.module').then( m => m.KaspinjamanPageModule)
  },
  {
    path: 'setorsimpanan',
    loadChildren: () => import('./setorsimpanan/setorsimpanan.module').then( m => m.SetorsimpananPageModule)
  },
  {
    path: 'setorangsuran',
    loadChildren: () => import('./setorangsuran/setorangsuran.module').then( m => m.SetorangsuranPageModule)
  },
  {
    path: 'formbayarangsuran',
    loadChildren: () => import('./formbayarangsuran/formbayarangsuran.module').then( m => m.FormbayarangsuranPageModule)
  },
  {
    path: 'cetaksimpanan',
    loadChildren: () => import('./cetaksimpanan/cetaksimpanan.module').then( m => m.CetaksimpananPageModule)
  },
  {
    path: 'cetakpinjaman',
    loadChildren: () => import('./cetakpinjaman/cetakpinjaman.module').then( m => m.CetakpinjamanPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'carinasabahsimpanan',
    loadChildren: () => import('./carinasabahsimpanan/carinasabahsimpanan.module').then( m => m.CarinasabahsimpananPageModule)
  },
  {
    path: 'carinasabahpinjaman',
    loadChildren: () => import('./carinasabahpinjaman/carinasabahpinjaman.module').then( m => m.CarinasabahpinjamanPageModule)
  },
  {
    path: 'detailnasabah',
    loadChildren: () => import('./detailnasabah/detailnasabah.module').then( m => m.DetailnasabahPageModule)
  },
  {
    path: 'caridatanasabah',
    loadChildren: () => import('./caridatanasabah/caridatanasabah.module').then( m => m.CaridatanasabahPageModule)
  },
  {
    path: 'hasilcarinasabah',
    loadChildren: () => import('./hasilcarinasabah/hasilcarinasabah.module').then( m => m.HasilcarinasabahPageModule)
  },
  {
    path: 'setprinter',
    loadChildren: () => import('./setprinter/setprinter.module').then( m => m.SetprinterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
