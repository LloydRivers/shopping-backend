// productRoutes.ts
import Router from 'koa-router';
import { getAllProducts, getProductById, postProduct, modifyProduct, deleteProduct } from './index';
import { validatePostRequest } from '../middleware/validatePostRequest';
import { productSchema } from '../schemas/productSchema';

const router = new Router({ prefix: '/products' });

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', validatePostRequest(productSchema), postProduct);
router.put('/:id', validatePostRequest(productSchema), modifyProduct);
router.delete('/:id', deleteProduct);

export default router;
