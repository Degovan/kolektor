import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CetaksimpananPage } from './cetaksimpanan.page';

const routes: Routes = [
  {
    path: '',
    component: CetaksimpananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CetaksimpananPageRoutingModule {}
