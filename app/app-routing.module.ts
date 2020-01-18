import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingComponent } from './shopping/shopping.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
{path:'', component:ShoppingComponent},
{path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
