import { ProductsDTO } from '../../DTO/ProductDTO';
import { IProductsService } from '../../services/abstract/ProductsService.ts';
import { injectable, inject } from 'inversify';

@injectable()
export class ProductsController {
  private productsService: IProductsService;

  constructor(@inject('ProductsService') productsService: IProductsService) {
    this.productsService = productsService;
  }

  public async getAllProducts(): Promise<ProductsDTO[]> {
    return await this.productsService.getAllProducts();
  }
}
