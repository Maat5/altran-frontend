import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//router
import { GnomesRoutingModule } from './gnomes.routing';
//components
import { GnomesComponent } from './gnomes.component';

@NgModule({
  imports: [
    CommonModule,
    GnomesRoutingModule
  ],
  declarations: [GnomesComponent]
})
export class GnomesModule { }
