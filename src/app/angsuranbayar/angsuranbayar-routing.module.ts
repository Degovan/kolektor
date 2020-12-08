import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngsuranbayarPage } from './angsuranbayar.page';

const routes: Routes = [
  {
    path: '',
    component: AngsuranbayarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngsuranbayarPageRoutingModule {}
