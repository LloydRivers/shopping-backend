import { IProductDTO } from '../../../DTO/ProductDTO';
import { IProductsService } from '../../../services/Product/IProductsService';
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
  public async getProductByID(productId: number): Promise<IProductDTO> {
    return await this.productsService.getProductByID(productId);
  }

  public async postProduct(product: IProductDTO): Promise<IProductDTO> {
    return await this.productsService.postProduct(product);
  }

  public async modifyProduct(productId: number, product: IProductDTO): Promise<IProductDTO> {
    return await this.productsService.modifyProduct(productId, product);
  }

  public async deleteProduct(productId: number): Promise<IProductDTO> {
    return await this.productsService.deleteProduct(productId);
  }
}
