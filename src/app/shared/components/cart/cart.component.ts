import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productName: string;
  price: number;
  quantity: number;
  totalPrice: number;
  empty: boolean;

  constructor(private cartService: CartService) {
    this.productName = '';
    this.price = 0;
    this.quantity = 0;
    this.totalPrice = 0;
    this.empty = true;
  }

  ngOnInit(): void {}
}
