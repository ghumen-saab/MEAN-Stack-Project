import { Component, Input } from '@angular/core';
import { ProductModel } from '../../types/product';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  imports: [MatAnchor],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() product!: ProductModel;
  discountedPrice(product: any): number {
    const price = Number(product.price);
    const discount = Number(product.discount);
    return price - (price * discount) / 100;
  }
}
