import { ProductDTO } from '../../DTO/ProductDTO';
import { ProductService } from '../../services/ProductService';

export class ProductsController {
  public async getAllProducts(): Promise<ProductDTO[]> {
    const listService = new ProductService();
    return await listService.getAllProducts();
  }
}
