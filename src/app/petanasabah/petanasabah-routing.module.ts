import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetanasabahPage } from './petanasabah.page';

const routes: Routes = [
  {
    path: '',
    component: PetanasabahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetanasabahPageRoutingModule {}
