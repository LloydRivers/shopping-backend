import { ProductDTO } from '../../DTO/ProductDTO';

export interface IProductsService {
  getAllProducts(): Promise<ProductDTO[]>;
}
