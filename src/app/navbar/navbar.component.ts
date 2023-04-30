import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from "../product";
import {ProductService} from "../product.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private productService: ProductService, private route: ActivatedRoute) {}

  searchTerm: string = '';
  searchIng: boolean = false;

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


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
      if (this.searchTerm.trim() !== '') {
        this.searchProducts(this.searchTerm);
        this.searchIng = true;
      }
    });
  }

  searchProducts(searchTerm: string): void {
    if (searchTerm.trim() !== '') {
      this.productService.getProducts().subscribe(products => {
        this.products = products.filter((product: { name: string; }) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }
  }

  searching(): boolean {
    return this.searchIng;
  }
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }
}
