import { ProductDTO } from '../../DTO/ProductDTO';
import { ProductsRepository } from '../../adaptors/repositories/concrete/ProductsRepository';
import { IProductsService } from '../abstract/ProductsService.ts';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../../../config/types';
import { ProductsMap } from '../../mappers/productsMap';

@injectable()
export class ProductsService implements IProductsService {
  private productsRepository: IProductsService;

  constructor(@inject(TYPES.ProductsRepository) productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  public async getAllProducts(): Promise<ProductDTO[]> {
    const products = await this.productsRepository.getAllProducts();
    return products.map((product) => ProductsMap.toDTO(product));
  }
}
