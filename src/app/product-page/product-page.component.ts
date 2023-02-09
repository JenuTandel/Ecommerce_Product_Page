import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartService } from '../shared/components/cart.service';
import { ProductComponent } from '../shared/components/product/product.component';
import { OverlayService } from '../shared/services/overlay.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  quantity: number;
  price: number;
  productName: string;
  totalPrice: number;
  data: any = {};

  constructor(
    private cartService: CartService,
    private overlayService: OverlayService
  ) {
    this.quantity = 0;
    this.price = 125.0;
    this.totalPrice = 0;
    this.productName = 'Fall Limited Edition Sneakers';
  }

  onPlus() {
    this.quantity = this.quantity + 1;
  }

  onMinus() {
    if (this.quantity <= 0) {
      this.quantity = 0;
    } else {
      this.quantity = this.quantity - 1;
    }
  }

  onAddtoCart() {
    this.totalPrice = this.quantity * this.price;

    this.data = {
      productName: this.productName,
      price: this.price,
      quantity: this.quantity,
      totalPrice: this.totalPrice,
    };
    this.cartService.cartData.next(this.data);
  }

  onProduct() {
    this.overlayService.openDialog(ProductComponent);
  }
}
