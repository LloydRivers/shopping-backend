import { Context } from 'koa';
import { ProductService } from '../services/ProductService';

export default async (ctx: Context) => {
  const listService = new ProductService();
  ctx.body = await listService.getAllProducts();
};
