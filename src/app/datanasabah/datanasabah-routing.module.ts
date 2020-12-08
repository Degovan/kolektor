import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatanasabahPage } from './datanasabah.page';

const routes: Routes = [
  {
    path: '',
    component: DatanasabahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatanasabahPageRoutingModule {}
