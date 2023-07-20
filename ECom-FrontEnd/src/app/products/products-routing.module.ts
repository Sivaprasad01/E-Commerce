import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { 
    path: '', component: AllProductsComponent 
  },
  {// 4200/products/viewProducts
    path:'viewproducts/:id',component:ViewProductsComponent
  },
  {// 4200/products/wishlist
    path:'wishlist',component:WishlistComponent
  },
  {// 4200/products/cart
    path:'cart',component:CartComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
