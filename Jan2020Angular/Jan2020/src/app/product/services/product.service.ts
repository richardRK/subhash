import { Injectable } from '@angular/core';
import {Product, IProduct } from '../model/product'
import { Observable, of } from 'rxjs';
// import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Array<Product> = [
    {id:1,name:'Subhash',code:'djkhjkf',categery:{name:'sdsddd',code:'djkkjdc',categery:1},unit:{name:'sdsddd',code:'djkkjdc',categery:1},salesRate:5454,purchaseRate:5446},
    {id:2,name:'Chandra',code:'dddfd',categery:{name:'cdfdfdf',code:'ddfdf',categery:1},unit:{name:'dfdf',code:'frfrfr',categery: 32},salesRate:5454,purchaseRate:5446},
    {id:3,name:'Bose',code:'ddfdfdf',categery:{name:'ddfdf',code:'djkkddfdfjdc',categery:1},unit:{name:'ddfdfd',code:'rfrfrf',categery: 2323},salesRate:5454,purchaseRate:5446}

  ]

  constructor() { }

  getAllProducts(): Observable<IProduct[]>{
    return of(this.products);
  }

  getProductById(id: number): Observable<IProduct>{
 var product = this.products.find(item => item.id === id);
    return of(product);
  }

  addNewProduct(product:IProduct):void{
    this.products.sort(item => item.id);
    this.products.push(product);
  }

  deleteProduct(product:IProduct):IProduct[]{
    const index = this.products.findIndex(item => item.id === product.id);
    const deleteItem = this.products.splice(index,1);

    return deleteItem;
  }
}
