import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  addProduct(product:any){
    let products:any[]=JSON.parse(localStorage.getItem('products')!) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

  }


  getAllProducts():any{
    return JSON.parse(localStorage.getItem('products')!) || [];
  }
}
