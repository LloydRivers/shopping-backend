import { IProductDTO } from '../../../DTO/ProductDTO';
import { IProductsService } from '../../../services/abstract/ProductsService.ts';
import { IProductsController } from './IProductsController';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../../../../config/types';

@injectable()
export class ProductsController implements IProductsController {
  private productsService: IProductsService;

  constructor(@inject(TYPES.ProductsService) productsService: IProductsService) {
    this.productsService = productsService;
  }

  public async getAllProducts(): Promise<IProductDTO[]> {
    return await this.productsService.getAllProducts();
  }
}
