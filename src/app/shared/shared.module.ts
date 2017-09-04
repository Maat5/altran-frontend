import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { InputFilterComponent } from './input-filter/input-filter.component';
import { PaginateComponent } from './paginate/paginate.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [InputFilterComponent, PaginateComponent],
  declarations: [InputFilterComponent, PaginateComponent]
})
export class SharedModule { }
