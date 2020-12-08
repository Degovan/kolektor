import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CetakpinjamanPage } from './cetakpinjaman.page';

const routes: Routes = [
  {
    path: '',
    component: CetakpinjamanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CetakpinjamanPageRoutingModule {}
