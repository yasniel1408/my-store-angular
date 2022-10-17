import { Component, OnInit } from '@angular/core';
import { ICreateProductModelDTO, IProductModel, IUpdateProductModelDTO } from 'src/app/shared/models/product.model';
import { GetAllProductsStoreService } from './store/get-all-products-store.service';
import { CreateProductsStoreService } from './store/create-products-store.service';
import { UpdateProductsStoreService } from './store/update-products-store.service';
import { DeleteProductsStoreService } from './store/delete-products-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products: IProductModel[] = [];

  today = new Date();
  date = new Date(2021, 1, 21);

  protected limit: number = 4;
  protected offset: number = 0;

  constructor(
    public getAllProductsStoreService: GetAllProductsStoreService,
    public createProductsStoreService: CreateProductsStoreService,
    public updateProductsStoreService: UpdateProductsStoreService,
    public deleteProductsStoreService: DeleteProductsStoreService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.getAllProductsStoreService.getAll(this.limit, this.offset).add(() => {
      this.products = this.products.concat(this.getAllProductsStoreService.getDataList());
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

    this.createProductsStoreService.create(product).add(() => {
      this.products.unshift(this.createProductsStoreService.getResource());
    });
  }

  updateProduct(idProduct: number): void {
    const product: IUpdateProductModelDTO = {
      title: 'Nuevo nombre del producto',
    };
    this.updateProductsStoreService.update(idProduct, product).add(() => {
      const product = this.updateProductsStoreService.getResource();
      // Reemplazamos el producto actualizado en el Array de productos
      const index = this.products.findIndex((item: IProductModel) => item.id === product.id);
      this.products[index] = product;
    });
  }

  deleteProduct(idProduct: number): void {
    this.deleteProductsStoreService.delete(idProduct).add(() => {
      if (this.deleteProductsStoreService.getIsDeleted()) {
        // Borramos el producto del Array de productos
        const index = this.products.findIndex((product) => product.id === idProduct);
        this.products.splice(index, 1);
      }
    });
  }

  // readAndUpdate(): void {
  //   // Solución callback hell
  //   this.apiService
  //     .getProduct(1)
  //     .pipe(
  //        switchMap((products) => this.apiService.updateProduct(1, { name: 'Nuevo nombre' }))
  //        switchMap((products) => this.apiService.updateProduct(1, { name: 'Nuevo nombre' }))
  //      )
  //     .subscribe((res) => {
  //       // Producto actualizado
  //     });
  // }

  // readAndUpdate(): void {
  //   // Agrupando observables en un mismo subscribe
  //   zip(
  //    this.apiService.getProduct(1),
  //    this.apiService.updateProductPATCH(1, { name: 'Nuevo nombre' })
  //   ).subscribe((res) => {
  //     const get = res[0];
  //     const update = res[1];
  //   });
  // }
}
