import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  constructor(private router:Router, private prodService:ProductService ){}
  products:any[]=[];

  ngOnInit(): void {
    this.getProducts();
  }

  goToMain(){
    this.router.navigate(['home']);
  }

  goToAdd(){
    this.router.navigate(['product/addproduct']);
  }

  getProducts(){
    this.prodService.getAllProducts();

  }

}
