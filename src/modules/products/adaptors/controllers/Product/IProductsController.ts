import { IProductDTO } from '../../../DTO/ProductDTO';

export interface IProductsController {
  getAllProducts(): Promise<IProductDTO[]>;
  getProductByID(productId: number): Promise<IProductDTO>;
}
