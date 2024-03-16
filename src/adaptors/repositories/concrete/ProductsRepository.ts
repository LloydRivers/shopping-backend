import { ProductDTO } from '../../../DTO/ProductDTO';
import { IProductsRepository } from '../abstract/ProductsRepository';
import { injectable } from 'inversify';

@injectable()
export class ProductsRepository implements IProductsRepository {
  public async getAllProducts(): Promise<ProductDTO[]> {
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
