import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './product/components/cart/cart.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Router } from '@angular/router';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule,
    FormsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
