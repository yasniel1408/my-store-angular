import { Component, OnInit } from '@angular/core';
import { IProductModel, ICreateProductModelDTO, IUpdateProductModelDTO } from 'src/app/models/product.model';
import { GetAllProductsApiService } from 'src/app/services/product-api/get-all-product-api.service';
import { CreateProductsApiService } from 'src/app/services/product-api/create-product-api.service';
import { UpdateProductsApiService } from 'src/app/services/product-api/update-product-api.service';
import { DeleteProductsApiService } from 'src/app/services/product-api/delete-product-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: IProductModel[] = [];
  today = new Date();
  date = new Date(2021, 1, 21);

  limit = 6;
  offset = 0;

  constructor(
    public getAllProductsApiService: GetAllProductsApiService,
    public createProductsApiService: CreateProductsApiService,
    public updateProductsApiService: UpdateProductsApiService,
    public deleteProductsApiService: DeleteProductsApiService
  ) {}

  ngOnInit(): void {
    this.loadData(this.limit, this.offset);
  }

  loadData(limit: number, offset: number) {
    this.getAllProductsApiService.getAll(limit, offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }

  createNewProduct() {
    const product: ICreateProductModelDTO = {
      title: 'Nuevo super producto',
      description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      price: 1000,
      categoryId: 1,
    };

    this.createProductsApiService.create(product).subscribe((p: IProductModel) => {
      this.products.unshift(p);
    });
  }

  updateProduct(idProduct: number): void {
    const product: IUpdateProductModelDTO = {
      title: 'Nuevo nombre del producto',
    };
    this.updateProductsApiService.update(idProduct, product).subscribe((p) => {
      // Reemplazamos el producto actualizado en el Array de productos
      const index = this.products.findIndex((product) => product.id === p.id);
      this.products[index] = p;
    });
  }

  deleteProduct(idProduct: number): void {
    this.deleteProductsApiService.delete(idProduct).subscribe((p) => {
      if (p) {
        // Borramos el producto del Array de productos
        const index = this.products.findIndex((product) => product.id === idProduct);
        this.products.splice(index, 1);
      }
    });
  }
}
