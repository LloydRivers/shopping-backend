import { ProductsDTO } from '../../../DTO/ProductDTO';
import { IProductsRepository } from '../abstract/ProductsRepo';

export class ProductsRepository implements IProductsRepository {
  public async getAllProducts(): Promise<ProductsDTO> {
    return [
      {
        id: 1,
        title: 'title',
        price: 100,
        description: 'description',
        category: 'category',
        image: 'image',
        rating: {
          rate: 4,
          count: 100,
        },
      },
    ];
  }
}
