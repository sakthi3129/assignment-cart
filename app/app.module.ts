import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CartIconComponent,
    FooterComponent,
    ShoppingComponent,
    FilterComponent,
    SortComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
