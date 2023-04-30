import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService, private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  checkout(): void {
    const paymentResult = this.paymentService.simulatePayment(this.getTotal());
    if (paymentResult) {
      alert('Payment successful!');
      this.cartItems = [];
      this.cartService.clearCart();
    } else {
      alert('Payment failed!');
    }
  }
}
