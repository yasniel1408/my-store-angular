import { ICategory } from './category.model';
export interface IProduct {
  id: number;
  title: string;
  category: ICategory;
  description: string;
  images: string[];
  price: number;
}
