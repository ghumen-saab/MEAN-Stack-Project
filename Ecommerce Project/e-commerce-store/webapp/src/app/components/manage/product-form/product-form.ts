import { Categories } from './../categories/categories';
import { Product } from './../../../services/product';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormArray,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { Brand } from '../../../services/brand';
import { Category } from '../../../services/category';
import { BrandModel } from '../../../types/brand';
import { CategoryModel } from '../../../types/category';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
})
export class ProductForm {
  formBuilder = inject(FormBuilder);
  productForm = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(5)]],
    shortDescription: [null, [Validators.required, Validators.minLength(10)]],
    description: [null, [Validators.required, Validators.minLength(20)]],
    price: [null, [Validators.required]],
    discount: [],
    images: this.formBuilder.array([]),
    categoryId: [null, [Validators.required]],
    brandId: [null, [Validators.required]],
  });
  brandService = inject(Brand);
  categoryService = inject(Category);
  productService = inject(Product);
  brands: BrandModel[] = [];
  Categories: CategoryModel[] = [];

  ngOnInit() {
    this.addImage();
    this.brandService.getBrands().subscribe((result) => {
      this.brands = result;
    });
    this.categoryService.getCategories().subscribe((result) => {
      this.Categories = result;
    });
  }

  router = inject(Router);
  addProduct() {
    let value = this.productForm.value;
    this.productService.addProduct(value as any).subscribe((result) => {
      alert('Product Added');
    });
    this.router.navigateByUrl('/admin/products');
  }

  get images() {
    return this.productForm.get('images') as FormArray;
  }
  addImage() {
    this.images.push(this.formBuilder.control(null));
  }
  removeImage() {
    this.images.removeAt(this.images.controls.length - 1);
  }
}
