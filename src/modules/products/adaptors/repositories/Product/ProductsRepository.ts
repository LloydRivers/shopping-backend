import { IProductDTO } from '../../../DTO/ProductDTO';
import { IProductsRepository } from './IProductsRepository';
import { injectable } from 'inversify';
import axios from 'axios';

const baseUrl = 'https://fakestoreapi.com/products';

function getErrorMessage(error: unknown): string {
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else message = String(error);
  return message;
}

@injectable()
export class ProductsRepository implements IProductsRepository {
  public async getAllProducts(): Promise<IProductDTO[]> {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      throw new Error(`${message}`);
    }
  }

  public async getProductByID(productId: number): Promise<IProductDTO> {
    const endPoint = `${baseUrl}/${productId}`;

    try {
      const response = await axios.get(endPoint);
      return response.data;
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      throw new Error(`${message}`);
    }
  }

  public async postProduct(product: IProductDTO): Promise<IProductDTO> {
    try {
      const response = await axios.post(baseUrl, product);
      return response.data;
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      throw new Error(`${message}`);
    }
  }

  public async modifyProduct(productId: number, product: IProductDTO): Promise<IProductDTO> {
    const endPoint = `${baseUrl}/${productId}`;

    try {
      const response = await axios.put(endPoint, product);
      return response.data;
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      throw new Error(`${message}`);
    }
  }

  public async deleteProduct(productId: number): Promise<IProductDTO> {
    const endPoint = `${baseUrl}/${productId}`;

    try {
      const response = await axios.delete(endPoint);
      return response.data;
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      throw new Error(`${message}`);
    }
  }
}

const seedPostgres = async () => {
  const productsRepository = new ProductsRepository();
  const products = await productsRepository.getAllProducts();

  products.forEach(async (product) => {
    await productsRepository.postProduct(product);
  });
};
