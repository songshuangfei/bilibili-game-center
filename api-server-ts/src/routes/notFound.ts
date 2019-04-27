import * as Koa from "koa";

type CtxType = Koa.ParameterizedContext;

function notFound( ctx: CtxType) {
    ctx.status = 404;
    ctx.body=`404 path:${ctx.path} is not found`;
}

export default function () {
    return async function ( ctx: CtxType, next:()=>Promise<any>) {
        notFound(ctx);
    }
}