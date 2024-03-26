import KoaRouter from 'koa-router';
import { getAllProducts, getProductById } from './routes';

const router = new KoaRouter();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

export default router;
