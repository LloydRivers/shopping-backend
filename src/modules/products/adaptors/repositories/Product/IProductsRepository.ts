import { IProductDTO } from '../../../DTO/ProductDTO';
import { Product } from '@prisma/client';

export interface IProductsRepository {
  getAllProducts(): Promise<Product[]>;
  getProductByID(productId: number): Promise<IProductDTO>;
}
