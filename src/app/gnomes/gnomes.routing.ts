import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GnomesComponent } from './gnomes.component';
import { DetailsComponent } from './details/details.component';

const gnomesRoutes: Routes = [
  {
    path: '',
    component: GnomesComponent
  },
  {
    path: ':id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(gnomesRoutes)],
  exports: [RouterModule]
})
export class GnomesRoutingModule { }
