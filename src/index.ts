import Koa from 'koa';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';

const main = (async () => {
  const app = new Koa();
  const router = new KoaRouter();
  const port = process.env.PORT || 8080;

  app.use(bodyParser());

  router.get('/hello', async (ctx) => {
    ctx.body = 'Hello Worldsss';
  });

  app.use(router.routes());

  app.listen(port);
  console.log(`App running at http://localhost:${port}`);
})();
export default main;
