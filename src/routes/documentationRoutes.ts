import Router from 'koa-router';
import swaggerDocs from '../routes/swagger';

const router = new Router();

router.get('/', swaggerDocs);

export default router;
