import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormbayarangsuranPage } from './formbayarangsuran.page';

const routes: Routes = [
  {
    path: '',
    component: FormbayarangsuranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormbayarangsuranPageRoutingModule {}
