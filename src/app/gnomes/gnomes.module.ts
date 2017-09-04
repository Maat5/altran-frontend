import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
//router
import { GnomesRoutingModule } from './gnomes.routing';
//components
import { GnomesComponent } from './gnomes.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GnomesRoutingModule
  ],
  declarations: [GnomesComponent, CardComponent]
})
export class GnomesModule { }
