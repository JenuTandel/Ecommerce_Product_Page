import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, ProductPageComponent],
  imports: [BrowserModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
