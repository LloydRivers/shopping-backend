import { Context } from 'koa';
import { ProductsService } from '../services/concrete/ProductsService';
import { container } from '../config/inversify.config';
import { TYPES } from '../config/types';
export default async (ctx: Context) => {
  const productsService = container.get<ProductsService>(TYPES.ProductsService);
  ctx.body = await productsService.getAllProducts();
};
