import KoaRouter from 'koa-router';
import { getAllProductsRoute as getAllProducts } from './routes';

const router = new KoaRouter();

router.get('/products', getAllProducts);

export default router;
