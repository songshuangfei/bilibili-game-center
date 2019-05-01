import * as Koa from "koa";
import * as fs from "fs";


let config = JSON.parse(fs.readFileSync("appConfig.json").toString());

type CtxType = Koa.ParameterizedContext;

export default function () {
    return async function ( ctx: CtxType, next:()=>Promise<any>) {
        ctx.set("Access-Control-Allow-Origin", `${config.AllowOrigin}`);
        ctx.set("Access-Control-Allow-Headers","Content-Type");
        ctx.set('Access-Control-Allow-Credentials', "true");
        // ctx.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        // ctx.set('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')
        // ctx.set("Access-Control-Allow-Credentials", "true");
        await next();
        // 返回所有OPTIONS请求
        if (ctx.request.method == "OPTIONS") {
            ctx.response.status = 200
        }
    }
}