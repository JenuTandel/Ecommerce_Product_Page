import { Component, ComponentRef, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/components/cart.service';
import { CartComponent } from 'src/app/shared/components/cart/cart.component';
import { OverlayService } from 'src/app/shared/services/overlay.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private data: any;
  constructor(
    private overlayService: OverlayService,
    private cartService: CartService
  ) {
    this.data = {};
  }

  ngOnInit(): void {
    this.cartService.cartData.subscribe((res: any) => {
      this.data.empty = false;
      this.data.productName = res.productName;
      this.data.price = res.price;
      this.data.quantity = res.quantity;
      this.data.totalPrice = res.totalPrice;
    });
  }
  openSidebar() {
    this.overlayService.openDialog(SidebarComponent);
  }

  openCart() {
    const componentRef = this.overlayService.openDialog(CartComponent);
    if (this.data.quantity > 0) {
      componentRef.instance.empty = false;
      componentRef.instance.productName = this.data.productName;
      componentRef.instance.price = this.data.price;
      componentRef.instance.quantity = this.data.quantity;
      componentRef.instance.totalPrice = this.data.totalPrice;
    }
  }
}
