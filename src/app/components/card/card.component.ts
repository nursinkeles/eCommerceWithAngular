import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product!: Product;
  title!: string;
  price!: number;
  description!: string;
  discountPercentage!: number;
  images!: Array<String>;
  rating!: number;
  brand!: string;
  isFavorite: boolean = false;

  ngOnInit() {
    const {
      title,
      price,
      description,
      discountPercentage,
      images,
      rating,
      brand,
    } = this.product;
    this.title = title;
    this.price = price;
    this.description = description;
    this.discountPercentage = discountPercentage;
    this.images = images;
    this.rating = rating;
    this.brand = brand;
  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  getRatingStars(rating: number): ('full' | 'empty')[] {
    const roundedRating = Math.round(rating);

    const stars: ('full' | 'empty')[] = [];

    for (let i = 0; i < 5; i++) {
      stars.push(i < roundedRating ? 'full' : 'empty');
    }
    return stars;
  }
  calculateFinalPrice(price: number, discountPercentage: number): string {
    const discountAmount = (price * discountPercentage) / 100;
    const finalPrice = Math.round(price - discountAmount) + '$';
    return finalPrice;
  }
}
