import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import productRoutes from './routes/productRoutes';
import documentationRoutes from './routes/documentationRoutes';
require('dotenv').config();

const main = (async () => {
  const app = new Koa();

  const port = process.env.PORT;
  app.use(cors());
  app.use(bodyParser());

  app.use(productRoutes.routes());
  app.use(documentationRoutes.routes());

  app.listen(port);
  console.log(`App running at http://localhost:${port}`);
})();
export default main;
