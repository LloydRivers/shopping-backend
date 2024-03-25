import { IProductDTO } from '../../DTO/ProductDTO';

export interface IProductsService {
  getAllProducts(): Promise<IProductDTO[]>;
}
