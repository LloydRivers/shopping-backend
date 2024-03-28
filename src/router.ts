import KoaRouter from 'koa-router';
import { getAllProducts, getProductById, postProduct, modifyProduct, deleteProduct } from './routes';
import { validatePostRequest } from './middleware/validatePostRequest';
import { productSchema } from './schemas/productSchema';
import swaggerDocs from './routes/swagger';

const router = new KoaRouter();

router.get('/documentation', swaggerDocs);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', validatePostRequest(productSchema), postProduct);
router.put('/products/:id', validatePostRequest(productSchema), modifyProduct);
router.delete('/products/:id', deleteProduct);

export default router;
