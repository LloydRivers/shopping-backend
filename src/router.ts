import KoaRouter from 'koa-router';
import { getAllProducts, getProductById, postProduct, modifyProduct } from './routes';
import { validatePostRequest } from './middleware/validatePostRequest';
import { productSchema } from './schemas/productSchema';

const router = new KoaRouter();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', validatePostRequest(productSchema), postProduct);
router.put('/products/:id', validatePostRequest(productSchema), modifyProduct);
router.delete('/products/:id', getProductById);

export default router;
