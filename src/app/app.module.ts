import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { ProductItemComponent } from './core/product-feature/product-item/product-item.component';
import { ProductFilteringComponent } from './core/product-feature/product-filtering/product-filtering.component';
import { PagingComponent } from './layout/paging/paging.component';
import { TestComponent } from './test/test.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { ProductFormComponent } from './core/product-feature/product-form/product-form.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListingComponent,
    ProductItemComponent,
    ProductFilteringComponent,
    PagingComponent,
    TestComponent,
    DropdownComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
