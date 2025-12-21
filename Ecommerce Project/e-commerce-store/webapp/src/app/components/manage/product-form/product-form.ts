import { Categories } from './../categories/categories';
import { Product } from './../../../services/product';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
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
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-product-form',
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
})
export class ProductForm {
  formBuilder = inject(FormBuilder);
  productForm = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    shortDescription: [null, [Validators.required, Validators.minLength(5)]],
    description: [null, [Validators.required, Validators.minLength(10)]],
    price: [null, [Validators.required]],
    discount: [],
    images: this.formBuilder.array([]),
    categoryId: [null, [Validators.required]],
    brandId: [null, [Validators.required]],
    isFeatured: [false],
    isNew: [false],
    createdAt: [new Date()],
    updatedAt: [new Date()],
  });
  brandService = inject(Brand);
  categoryService = inject(Category);
  productService = inject(Product);
  brands: BrandModel[] = [];
  Categories: CategoryModel[] = [];
  route = inject(ActivatedRoute);
  id!: string;
  ngOnInit() {
    this.brandService.getBrands().subscribe((result) => {
      this.brands = result;
    });
    this.categoryService.getCategories().subscribe((result) => {
      this.Categories = result;
    });
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.productService.getProductById(this.id).subscribe((result: any) => {
        for (let i = 0; i < result.images.length; i++) {
          this.addImage();
        }
        this.productForm.patchValue(result);
      });
    } else {
      this.addImage();
    }
  }

  router = inject(Router);
  addProduct() {
    let value = this.productForm.value;
    this.productService.addProduct(value as any).subscribe((result) => {
      alert('Product Added');
    });
    this.router.navigateByUrl('/admin/products');
  }
  updateProduct() {
    let value = this.productForm.value;
    this.productService.updateProduct(this.id, value as any).subscribe((result) => {
      alert('Product Updated');
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
