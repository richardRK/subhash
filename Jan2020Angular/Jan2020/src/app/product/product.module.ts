import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms';
// import{ ReactiveFormModule} from'

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
