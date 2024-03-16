import { Context } from 'koa';
import { ProductsService } from '../services/concrete/ProductsService';

export default async (ctx: Context) => {
  const listService = new ProductsService();
  ctx.body = await listService.getAllProducts();
};
