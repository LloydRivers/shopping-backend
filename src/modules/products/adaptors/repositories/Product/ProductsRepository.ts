import { IProductDTO } from '../../../DTO/ProductDTO';
import { IProductsRepository } from './IProductsRepository';
import { injectable } from 'inversify';
import axios from 'axios';

const url = 'https://fakestoreapi.com/products';

@injectable()
export class ProductsRepository implements IProductsRepository {
  public async getAllProducts(): Promise<IProductDTO[]> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error: unknown) {
      let message;
      if (error instanceof Error) {
        message = error.message;
      } else message = String(error);
      throw new Error(`Error fetching products: ${message}`);
    }
  }
}
