export interface ProductModel {
  id?: string;
  name: string;
  shortDescription: string;
  description: string;
  price: Number;
  discount: Number;
  images: string;
  categoryId: string;
  brandId: string;
  isFeatured: boolean;
  isNewProduct: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
