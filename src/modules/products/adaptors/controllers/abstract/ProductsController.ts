import { ProductDTO } from '../../../DTO/ProductDTO';

export interface IProductsController {
  getAllProducts(): Promise<ProductDTO[]>;
}
