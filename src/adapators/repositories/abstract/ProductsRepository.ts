import { ProductDTO } from '../../../DTO/ProductDTO';
export interface IProductsRepository {
  getAllProducts(): Promise<ProductDTO[]>;
}
