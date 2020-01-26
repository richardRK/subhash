import { Injectable } from '@angular/core';
//import { IProduct } from '../model/product';
import { Lookup } from '../model/lookup';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private units: Array<Lookup> = [
    {name:'Subhash',code:'SCB',categery:1},
    {name:'Chandra',code:'CB',categery:1},
    {name:'Bose',code:'BosePutta',categery:1}
  ];

  private productCatogeries :Array<Lookup> =[
    {name:'Sai',code:'SSR',categery:2},
    {name:'Thanmai',code:'TM',categery:2},
    {name:'Sasi',code:'SS',categery:2}

  ]

  constructor() { }
 getProductCatogeries(): Observable<Lookup[]>{
  return of(this.productCatogeries);
 }
  
 getUnits(): Observable<Lookup[]>{
   return of(this.units);
 }
}
