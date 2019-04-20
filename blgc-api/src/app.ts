import * as Koa from 'koa';
const app = new Koa();

// logger

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  });
  
  // x-response-time
  
  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });
  
  // response
  
  app.use(async ctx => {
    ctx.body = 'Hello World';
    // ctx.cookies.set('uid','123123213');
  });

  app.on('error', err => {
    console.log('server error', err)
  });
  
  app.listen(8000);