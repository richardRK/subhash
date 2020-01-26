import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Lookup } from '../model/lookup';
import { LookupService } from '../services/lookup.service';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  productForm = this.fb.group({});
  units: Observable<Lookup[]>;
  categories: Observable<Lookup[]>;
  // router: any;
  constructor(private fb:FormBuilder,
    private lookupservice:LookupService,
    private productService:ProductService,
    private router: Router) { }


  ngOnInit() {
    this.productForm.addControl('id',new FormControl(''));
    this.productForm.addControl('name',new FormControl('',[Validators.required]));
    this.productForm.addControl('code',new FormControl('',[Validators.required]));
    this.productForm.addControl('unit',new FormControl('',[Validators.required]));
    this.productForm.addControl('categery',new FormControl('',[Validators.required]));
    this.productForm.addControl('salesRate',new FormControl('',[Validators.required]));
    this.productForm.addControl('purchaseRate',new FormControl('',[Validators.required]));


    this.units = this.lookupservice.getUnits();
    this.categories = this.lookupservice.getProductCatogeries();
  }

  private saveProduct(){
    const products = new Product();
    products.id = this.productForm.get('id').value;
    products.name = this.productForm.get('name').value;
    products.code = this.productForm.get('code').value;
    products.unit = this.getLookupObjFromCode(this.productForm.get('unit').value);
    products.categery = this.getLookupObjFromCode(this.productForm.get('categery').value);

    products.salesRate = this.productForm.get('salesRate').value;
    products.purchaseRate = this.productForm.get('purchaseRate').value;

   this.productService.addNewProduct(products);
  }

  save($event):void{
  
alert('hello');
    if(!this.productForm.valid){
      return ;
    }

    this.saveProduct();
    this.router.navigate(['/product']);

  }

  saveAndContinue(event):void{}

  
getLookupObjFromCode(code:string): Lookup{
  var lookup: Lookup = null;
  const subscription = this.units.subscribe(lookups =>{
    lookup = lookups.find(item => item.code == code)
  })

  subscription.unsubscribe();
  return lookup;

}

}
