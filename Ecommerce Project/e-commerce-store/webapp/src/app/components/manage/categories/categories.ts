import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Category } from '../../../services/category';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-categories',
  imports: [MatFormFieldModule,
    MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatButtonModule
  ],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  categoryService = inject(Category);
  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([] as any);
  }
  ngOnInit() {
    this.categoryService.getCategories().subscribe((result: any) => {
      this.dataSource.data = result;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
