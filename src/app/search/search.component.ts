import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';

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

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
      this.searchProducts();
    });
  }

  searchProducts(): void {
    if (this.searchTerm.trim() !== '') {
      this.productService.getProducts().subscribe(products => {
        this.products = products.filter((product: { name: string; }) =>
          product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    }
  }
}
