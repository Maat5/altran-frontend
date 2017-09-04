import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { InputFilterComponent } from './input-filter/input-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [InputFilterComponent],
  declarations: [InputFilterComponent]
})
export class SharedModule { }
