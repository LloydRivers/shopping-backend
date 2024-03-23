import { Mapper } from '../../../shared/Mapper';
import { Product } from '../entity/Product';
import { IProductDTO } from '../DTO/ProductDTO';

export class ProductsMap extends Product implements Mapper<Product> {
  static toDTO(product: Product): IProductDTO {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: product.rating,
    };
  }
}
