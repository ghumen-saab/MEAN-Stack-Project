import { CategoryModel } from './../../types/category';
import { Component, inject } from '@angular/core';
import { Category } from '../../services/category';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  categoryService = inject(Category);
  categoryList: CategoryModel[] = [];

  ngOnInit() {
    this.loadCategories();
  }
  loadCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categoryList = result;
    });
  }
}
