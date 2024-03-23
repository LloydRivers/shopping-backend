import { Context } from 'koa';
import { ProductsService } from '../modules/products/services/concrete/ProductsService';
import { ProductsController } from '../modules/products/adaptors/controllers/Product/ProductsController';
import { container } from '../config/inversify.config';
import { TYPES } from '../config/types';
export default async (ctx: Context) => {
  const productsController = container.get<ProductsController>(TYPES.ProductsController);
  ctx.body = await productsController.getAllProducts();
};
