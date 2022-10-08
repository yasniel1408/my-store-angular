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

  public isLoading: boolean = false;

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
    this.isLoading = true;
    this.getAllProductsApiService.getAll(limit, offset).subscribe({
      next: (data) => {
        this.products = this.products.concat(data);
        this.offset += this.limit;
        this.isLoading = false;
      },
      error: (err) => {
        alert(err); // Aquí se emitirá el alerta con el mensaje que `throwError` devuelva.
      },
    });
  }

  createNewProduct() {
    this.isLoading = true;
    const product: ICreateProductModelDTO = {
      title: 'Nuevo super producto',
      description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      price: 1000,
      categoryId: 1,
    };

    this.createProductsApiService.create(product).subscribe({
      next: (p: IProductModel) => {
        this.products.unshift(p);
        this.isLoading = false;
      },
      error: (err) => {
        alert(err); // Aquí se emitirá el alerta con el mensaje que `throwError` devuelva.
      },
    });
  }

  updateProduct(idProduct: number): void {
    this.isLoading = true;
    const product: IUpdateProductModelDTO = {
      title: 'Nuevo nombre del producto',
    };
    this.updateProductsApiService.update(idProduct, product).subscribe({
      next: (p) => {
        // Reemplazamos el producto actualizado en el Array de productos
        const index = this.products.findIndex((product) => product.id === p.id);
        this.products[index] = p;
        this.isLoading = false;
      },
      error: (err) => {
        alert(err); // Aquí se emitirá el alerta con el mensaje que `throwError` devuelva.
      },
    });
  }

  deleteProduct(idProduct: number): void {
    this.isLoading = true;
    this.deleteProductsApiService.delete(idProduct).subscribe({
      next: (p) => {
        if (p) {
          // Borramos el producto del Array de productos
          const index = this.products.findIndex((product) => product.id === idProduct);
          this.products.splice(index, 1);
          this.isLoading = false;
        }
      },
      error: (err) => {
        alert(err); // Aquí se emitirá el alerta con el mensaje que `throwError` devuelva.
      },
    });
  }
}
