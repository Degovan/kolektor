import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetorangsuranPage } from './setorangsuran.page';

const routes: Routes = [
  {
    path: '',
    component: SetorangsuranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetorangsuranPageRoutingModule {}
