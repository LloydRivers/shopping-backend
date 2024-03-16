import { ProductsRepository } from '../../adapators/repositories/concrete/ProductsRepository';
export class ProductsService {
  public async getAllProducts() {
    const productsRepository = new ProductsRepository();
    return await productsRepository.getAllProducts();
  }
}
