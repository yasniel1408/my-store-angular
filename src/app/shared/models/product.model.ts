import { IBaseModel } from './base-model.model';
import { ICategoryModel } from './category.model';
export interface IProductModel extends IBaseModel {
  id: number;
  title: string;
  category: ICategoryModel;
  description: string;
  images: string[];
  price: number;
  taxes?: number;
}

export interface ICreateProductModelDTO extends Omit<IProductModel, 'id' | 'category'> {
  categoryId: number;
}

export interface IUpdateProductModelDTO extends Partial<ICreateProductModelDTO> {}
