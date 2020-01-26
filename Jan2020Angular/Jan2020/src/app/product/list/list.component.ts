import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
// products:any;
//   constructor(private productservice: ProductService) { }

//   ngOnInit() {
//     this.productservice.getAllProducts().subscribe(res => {this.products = res});
//     console.log(this.products);
//   }
products: Observable<IProduct[]> = null;
constructor(private productservices:ProductService){}

ngOnInit() {
  this.products = this.productservices.getAllProducts();
  debugger;
  console.log(this.products);
      // this.productservice.getAllProducts().subscribe(res => {this.products = res});
    }

}
