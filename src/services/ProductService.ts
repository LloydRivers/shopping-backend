import { ProductsRepository } from '../adapators/repositories/concrete/ProductsRepository';
export class ProductService {
  public async getAllProducts() {
    const productsRepository = new ProductsRepository();
    return await productsRepository.getAllProducts();
  }
}
