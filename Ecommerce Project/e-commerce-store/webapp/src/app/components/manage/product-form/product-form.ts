import { Product } from './../../../services/product';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
})
export class ProductForm {
 name!: string;
  productService = inject(Product);
  router = inject(Router);
  route = inject(ActivatedRoute);
  id!: string;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
   this.productService.getProductById(this.id).subscribe((result: any) => {
        this.name = result.name;
      });
  }
  add() {
    this.productService.addProduct(this.name).subscribe((result: any) => {
      alert('Product Added');
      this.router.navigateByUrl('/admin/products');
    });
  }
  update() {
    this.productService.updateProduct(this.id, this.name).subscribe((result: any) => {
      alert('Product Updated');
      this.router.navigateByUrl('/admin/products');
    });
  }
}
