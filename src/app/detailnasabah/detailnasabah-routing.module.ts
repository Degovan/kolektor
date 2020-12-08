import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailnasabahPage } from './detailnasabah.page';

const routes: Routes = [
  {
    path: '',
    component: DetailnasabahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailnasabahPageRoutingModule {}
