import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component'
import { FoodDetailComponent } from './food-detail/food-detail.component'
import { CartComponent } from './cart/cart.component'
import { SuccessComponent } from './success/success.component'

const routes: Routes = [
  {
    path: 'foods',
    component: ProductCardComponent
  },
  {
    path: 'foods/:id',
    component: FoodDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
