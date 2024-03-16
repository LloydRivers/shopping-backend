import { ProductsDTO } from '../../../DTO/ProductDTO';

export interface IProductsController {
  getAllProducts(): Promise<ProductsDTO[]>;
}
