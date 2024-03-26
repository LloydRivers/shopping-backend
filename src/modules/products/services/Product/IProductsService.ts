import { IProductDTO } from '../../DTO/ProductDTO';

export interface IProductsService {
  getAllProducts(): Promise<IProductDTO[]>;
  getProductByID(productId: number): Promise<IProductDTO>;
  postProduct(product: IProductDTO): Promise<IProductDTO>;
  modifyProduct(productId: number, product: IProductDTO): Promise<IProductDTO>;
}
