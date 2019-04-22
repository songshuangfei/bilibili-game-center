import * as Router from "koa-router";
const router = new Router();

router.get('/homebanner',async (ctx)=>{
    ctx.body='首页';
})