import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KasnasabahPage } from './kasnasabah.page';

const routes: Routes = [
  {
    path: '',
    component: KasnasabahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KasnasabahPageRoutingModule {}
