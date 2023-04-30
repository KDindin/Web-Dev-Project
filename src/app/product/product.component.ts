import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../product';
import {Category} from "../category";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // product!: Observable<Product>;
  product? : Product
  products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S21',
      description: 'A high-end Android smartphone with 5G connectivity and a powerful processor.',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h6b/63967892439070.jpg?format=gallery-large',
      categoryId: 'electronics',
      price: 999.99,
    },
    {
      id: 2,
      name: 'Apple MacBook Pro',
      description: 'A top-of-the-line laptop with a Retina display and long battery life.',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h24/hc9/64085267644446.jpg?format=gallery-large',
      categoryId: 'electronics',
      price: 1499.99,
    },
    {
      id: 3,
      name: 'Nike Air Max 270',
      description: 'A stylish and comfortable pair of sneakers with a large Air Max unit in the heel.',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h20/hb7/64055416487966.jpg?format=gallery-large',
      categoryId: 'clothing',
      price: 119.99,
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    // this.product = this.productService.getProductById(Number(productId));
    if (productId) {
      this.product = (this.products)[Number(productId) - 1]
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
