import { Context } from 'koa';
import { ProductsController } from '../modules/products/adaptors/controllers/Product/ProductsController';
import { container } from '../config/inversify.config';
import { TYPES } from '../config/types';
import { IProductDTO } from '@modules/products/DTO/ProductDTO';
export const getAllProducts = async (ctx: Context) => {
  const productsController = container.get<ProductsController>(TYPES.ProductsController);
  ctx.body = await productsController.getAllProducts();
};

export const getProductById = async (ctx: Context) => {
  const productId = ctx.params.id;
  const productsController = container.get<ProductsController>(TYPES.ProductsController);
  ctx.body = await productsController.getProductByID(productId);
};

export const postProduct = async (ctx: Context) => {
  const productsController = container.get<ProductsController>(TYPES.ProductsController);
  const requestBody: IProductDTO = ctx.request.body as IProductDTO;
  ctx.body = await productsController.postProduct(requestBody);
};
