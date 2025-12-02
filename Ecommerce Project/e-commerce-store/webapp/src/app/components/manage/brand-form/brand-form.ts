import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../../../services/brand';
@Component({
  selector: 'app-brand-form',
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './brand-form.html',
  styleUrl: './brand-form.scss',
})
export class BrandForm {
  name!: string;
  brandService = inject(Brand);
  router = inject(Router);
  route = inject(ActivatedRoute);
  id!: string;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
   this.brandService.getBrandById(this.id).subscribe((result: any) => {
        this.name = result.name;
      });
  }
  add() {
    console.log(this.name);
    this.brandService.addBrand(this.name).subscribe((result: any) => {
      alert('Brand Added');
      this.router.navigateByUrl('/admin/brands');
    });
  }
  update() {
    this.brandService.updateBrand(this.id, this.name).subscribe((result: any) => {
      alert('Brand Updated');
      this.router.navigateByUrl('/admin/brands');
    });
  }
}
