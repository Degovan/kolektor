import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetoranPage } from './setoran.page';

const routes: Routes = [
  {
    path: '',
    component: SetoranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetoranPageRoutingModule {}
