import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../services/customer';
import { ProductModel } from '../../types/product';
import { ProductCard } from '../product-card/product-card';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCard, CarouselModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
  };

  private customerService = inject(Customer);
  newProducts: ProductModel[] = [];
  featuredProducts: ProductModel[] = [];
  bannerImages: ProductModel[] = [];

  ngOnInit(): void {
    this.loadNewProducts();
    this.loadFeaturedProducts();
  }

  loadNewProducts(): void {
    this.customerService.getNewProducts().subscribe({
      next: (products) => {
        (this.newProducts = products), this.bannerImages.push(...products);
      },
      error: (err) => console.error('New Products Error:', err),
    });
  }

  loadFeaturedProducts(): void {
    this.customerService.getFeaturedProducts().subscribe({
      next: (products) => {
        (this.featuredProducts = products), this.bannerImages.push(...products);
      },
      error: (err) => console.error('Featured Products Error:', err),
    });
  }

  discountedPrice(product: ProductModel): number {
    const price = Number(product.price);
    const discount = Number(product.discount);
    return price - (price * discount) / 100;
  }
}
