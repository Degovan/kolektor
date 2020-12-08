import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetprinterPage } from './setprinter.page';

const routes: Routes = [
  {
    path: '',
    component: SetprinterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetprinterPageRoutingModule {}
