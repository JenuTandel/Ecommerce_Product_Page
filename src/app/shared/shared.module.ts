import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayService } from './services/overlay.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, OverlayModule],
  providers: [],
  exports: [CartComponent],
})
export class SharedModule {}
