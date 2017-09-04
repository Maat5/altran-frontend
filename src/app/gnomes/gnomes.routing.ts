import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GnomesComponent } from './gnomes.component';

const gnomesRoutes: Routes = [
  {
    path: '',
    component: GnomesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(gnomesRoutes)],
  exports: [RouterModule]
})
export class GnomesRoutingModule { }
