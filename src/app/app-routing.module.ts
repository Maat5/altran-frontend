import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gnomes',
    pathMatch: 'full'
  },
  { 
    path: 'gnomes', 
    loadChildren: './gnomes/gnomes.module#GnomesModule'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }