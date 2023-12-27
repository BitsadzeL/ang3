import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  implements OnInit{
  constructor(private router:Router, private fb:FormBuilder, private prodService:ProductService ){}
  productForm!:FormGroup;
  newIsSaved!:boolean;

  ngOnInit():void{
    this.newIsSaved=false;
    this.createForm();
  }

  createForm(){
    this.productForm=this.fb.group({
      name:[''],
      price:['']
    })
  }
  


  goToMain(){
    this.router.navigate(['home']);
  }

  goToDashboard(){
    this.router.navigate(['product/productdashboard']);
  }
 

  onSubmit() {
    const productData = this.productForm.value;
    this.prodService.addProduct(productData);
    this.newIsSaved=true;
  }



}
