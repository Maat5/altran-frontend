import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//router
import { GnomesRoutingModule } from './gnomes.routing';
//components
import { GnomesComponent } from './gnomes.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    GnomesRoutingModule
  ],
  declarations: [GnomesComponent, CardComponent]
})
export class GnomesModule { }
