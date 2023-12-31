import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductDeGuard } from '../guards/product-de.guard';


const routes: Routes = [
  { path: 'addproduct', component: AddProductComponent,canDeactivate:[ProductDeGuard] },
  { path: 'productdashboard', component: ProductDashboardComponent },
  { path: '',  redirectTo:"/productdashboard", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
