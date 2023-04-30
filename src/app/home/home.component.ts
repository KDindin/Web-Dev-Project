import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Product } from '../product';
import { Category } from '../category';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  categories: Category[] = [
    {
      id: 'electronics',
      name: 'Electronics',
    },
    {
      id: 'clothing',
      name: 'Clothing',
    },
  ];
  selectedCategories: string[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  filterByCategory(categoryId: string): void {
    if (this.selectedCategories.includes(categoryId)) {
      this.selectedCategories = this.selectedCategories.filter(id => id !== categoryId);
    } else {
      this.selectedCategories.push(categoryId);
    }
  }

  filterProducts(): Product[] {
    if (this.selectedCategories.length === 0) {
      return this.products;
    } else {
      return this.products.filter(product => this.selectedCategories.includes(product.categoryId));
    }
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
