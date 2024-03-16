import { ProductDTO } from '../../DTO/ProductDTO';
import { ProductsRepository } from '../../adaptors/repositories/concrete/ProductsRepository';
import { IProductsService } from '../abstract/ProductsService.ts';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../config/types';

@injectable()
export class ProductsService implements IProductsService {
  private productsRepository: IProductsService;

  constructor(@inject(TYPES.ProductsRepository) productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  public async getAllProducts(): Promise<ProductDTO[]> {
    return await this.productsRepository.getAllProducts();
  }
}
