const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  console.log(ctx.request.originalUrl);
  ctx.body = 'Hello World';
});

app.listen(8080);
