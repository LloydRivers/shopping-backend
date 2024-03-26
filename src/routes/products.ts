import { Context } from 'koa';
import { ProductsController } from '../modules/products/adaptors/controllers/Product/ProductsController';
import { container } from '../config/inversify.config';
import { TYPES } from '../config/types';
export const getAllProducts = async (ctx: Context) => {
  const productsController = container.get<ProductsController>(TYPES.ProductsController);
  ctx.body = await productsController.getAllProducts();
};

export const getProductById = async (ctx: Context) => {
  const productId = ctx.params.id;
  const productsController = container.get<ProductsController>(TYPES.ProductsController);
  ctx.body = await productsController.getProductByID(productId);
};
