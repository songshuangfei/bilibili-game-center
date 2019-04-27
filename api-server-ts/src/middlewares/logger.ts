import * as Koa from "koa";

type CtxType = Koa.ParameterizedContext;

function log( ctx: CtxType,time:number) {
    console.log( ctx.method, ctx.header.host + ctx.url, time+"ms", ctx.status);
}

export default function () {
    return async function ( ctx: CtxType, next:()=>Promise<any>) {
        const start = Date.now();
        await next();
        const totalTime = Date.now() - start;
        log(ctx, totalTime);
    }
}