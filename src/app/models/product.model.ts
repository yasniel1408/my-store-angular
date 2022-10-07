import { ICategoryModel } from './category.model';
export interface IProductModel {
  id: number;
  title: string;
  category: ICategoryModel;
  description: string;
  images: string[];
  price: number;
}


export interface ICreateProductModelDTO {
  title: string;
  categoryId: number;
  description: string;
  images: string[];
  price: number;
}
