import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetorsimpananPage } from './setorsimpanan.page';

const routes: Routes = [
  {
    path: '',
    component: SetorsimpananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetorsimpananPageRoutingModule {}
