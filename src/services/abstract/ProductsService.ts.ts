import { ProductsDTO } from '../../DTO/ProductDTO';

export interface IProductsService {
  getAllProducts(): Promise<ProductsDTO[]>;
}
