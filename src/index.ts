import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './router';

const main = (async () => {
  const app = new Koa();

  const port = process.env.PORT || 8080;

  app.use(bodyParser());

  app.use(router.routes());

  app.listen(port);
  console.log(`App running at http://localhost:${port}`);
})();
export default main;
