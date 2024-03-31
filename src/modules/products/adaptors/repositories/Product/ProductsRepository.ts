import { IProductDTO } from '../../../DTO/ProductDTO';
import { IProductsRepository } from './IProductsRepository';
import { injectable } from 'inversify';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const baseUrl = 'https://fakestoreapi.com/products';
// I think the base url should be in the .env file

function getErrorMessage(error: unknown): string {
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else message = String(error);
  return message;
}
let prisma: PrismaClient;
export const getPrismaClient = () => {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
};

@injectable()
export class ProductsRepository implements IProductsRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = getPrismaClient();
  }
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
      const getProducts = await this.getAllProducts();
      if (getProducts.length > 0) {
        for (const product of getProducts) {
          await this.prisma.product.create({
            data: {
              title: product.title,
              price: product.price,
              description: product.description,
              category: product.category,
              image: product.image,
            },
          });
        }
      }

      const response = await axios.post(baseUrl, product);
      console.log('response', response.data);
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
