import { IProductDTO } from '../../DTO/ProductDTO';
import { ProductsRepository } from '../../adaptors/repositories/Product/ProductsRepository';
import { IProductsService } from '../abstract/ProductsService.ts';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../../../config/types';

@injectable()
export class ProductsService implements IProductsService {
  private productsRepository: IProductsService;

  constructor(@inject(TYPES.ProductsRepository) productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  public async getAllProducts(): Promise<IProductDTO[]> {
    return await this.productsRepository.getAllProducts();
  }
  public async getProductByID(productId: number): Promise<IProductDTO> {
    return await this.productsRepository.getProductByID(productId);
  }

  public async postProduct(product: IProductDTO): Promise<IProductDTO> {
    return await this.productsRepository.postProduct(product);
  }
}
