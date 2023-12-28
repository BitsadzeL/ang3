import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { path: 'addproduct', component: AddProductComponent },
  { path: 'productdashboard', component: ProductDashboardComponent },
  { path: '',  redirectTo:"/productdashboard", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
