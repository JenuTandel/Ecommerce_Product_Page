import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayService } from './services/overlay.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './components/cart.service';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [CartComponent, ProductComponent],
  imports: [CommonModule, OverlayModule],
  providers: [CartService],
  exports: [CartComponent, ProductComponent],
})
export class SharedModule {}
