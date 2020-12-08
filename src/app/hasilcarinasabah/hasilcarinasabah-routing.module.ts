import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HasilcarinasabahPage } from './hasilcarinasabah.page';

const routes: Routes = [
  {
    path: '',
    component: HasilcarinasabahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HasilcarinasabahPageRoutingModule {}
