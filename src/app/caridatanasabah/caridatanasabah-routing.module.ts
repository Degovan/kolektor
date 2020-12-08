import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaridatanasabahPage } from './caridatanasabah.page';

const routes: Routes = [
  {
    path: '',
    component: CaridatanasabahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaridatanasabahPageRoutingModule {}
