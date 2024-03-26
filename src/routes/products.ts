import { Context } from 'koa';
import { ProductsController } from '../modules/products/adaptors/controllers/Product/ProductsController';
import { container } from '../config/inversify.config';
import { TYPES } from '../config/types';
import { IProductDTO } from '@modules/products/DTO/ProductDTO';

function productContainer() {
  const productsController = container.get<ProductsController>(TYPES.ProductsController);
  return productsController;
}
export async function getAllProducts(ctx: Context) {
  const productsController = productContainer();
  ctx.body = await productsController.getAllProducts();
}

export async function getProductById(ctx: Context) {
  const productId = ctx.params.id;
  const productsController = productContainer();
  ctx.body = await productsController.getProductByID(productId);
}

export async function postProduct(ctx: Context) {
  const productsController = productContainer();
  const requestBody: IProductDTO = ctx.request.body as IProductDTO;
  ctx.body = await productsController.postProduct(requestBody);
}

export async function modifyProduct(ctx: Context) {
  const productId = ctx.params.id;
  const productsController = productContainer();
  const requestBody: IProductDTO = ctx.request.body as IProductDTO;
  ctx.body = await productsController.modifyProduct(productId, requestBody);
}

export async function deleteProduct(ctx: Context) {
  const productId = ctx.params.id;
  const productsController = productContainer();
  ctx.body = await productsController.deleteProduct(productId);
}
