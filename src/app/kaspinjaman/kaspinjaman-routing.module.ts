import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KaspinjamanPage } from './kaspinjaman.page';

const routes: Routes = [
  {
    path: '',
    component: KaspinjamanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaspinjamanPageRoutingModule {}
