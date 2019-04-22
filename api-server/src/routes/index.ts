import * as Router from "koa-router";
const router = new Router();

router.get('/homebanner',async (ctx)=>{
    ctx.body='首页';
})

router.get('/hotgame',async (ctx)=>{
    ctx.body=ctx.query;
})

router.get('/hotstrategy',async (ctx)=>{
    ctx.body='hotstrategy';
})

export default router;