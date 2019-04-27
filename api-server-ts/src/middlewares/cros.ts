import * as Koa from "koa";
import * as fs from "fs";

let config = JSON.parse(fs.readFileSync("appConfig.json").toString());

type CtxType = Koa.ParameterizedContext;

export default function () {
    return async function ( ctx: CtxType, next:()=>Promise<any>) {
        ctx.set("Access-Control-Allow-Origin", `${config.AllowOrigin}`);
        await next();
    }
}