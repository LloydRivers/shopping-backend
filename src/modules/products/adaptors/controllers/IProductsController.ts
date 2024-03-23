import { IProductDTO } from '../../DTO/ProductDTO';

export interface IProductsController {
  getAllProducts(): Promise<IProductDTO[]>;
}
