import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService],
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.products = data.products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  onDrop(event: any) {
    const prevIndex = event.previousIndex;
    const currentIndex = event.currentIndex;
    const movedItem = this.products[prevIndex];
    if (prevIndex !== currentIndex) {
      this.products.splice(prevIndex, 1);
      this.products.splice(
        currentIndex > prevIndex ? currentIndex - 1 : currentIndex,
        0,
        movedItem
      );
    }
  }
}
