import { IProductDTO } from '../../../DTO/ProductDTO';
export interface IProductsRepository {
  getAllProducts(): Promise<IProductDTO[]>;
  getProductByID(productId: number): Promise<IProductDTO>;
}
