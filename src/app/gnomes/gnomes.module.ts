import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
//router
import { GnomesRoutingModule } from './gnomes.routing';
//components
import { GnomesComponent } from './gnomes.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
//service
import { GnomesService } from './gnomes.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GnomesRoutingModule
  ],
  declarations: [GnomesComponent, CardComponent, DetailsComponent],
  providers: [GnomesService]
})
export class GnomesModule { }
