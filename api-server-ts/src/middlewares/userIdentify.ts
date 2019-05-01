import * as Koa from "koa";
import { parseUserToken } from "../token/userToken"

type CtxType = Koa.ParameterizedContext;

// handler
function notLogged(ctx: CtxType) {
    ctx.status = 403;
    ctx.body = {status: 1012};// 无token
}

function  authenticationExpired(ctx: CtxType) {
    ctx.cookies.set('userToken','',{signed:false,maxAge:0});// 清除过期token
    ctx.status = 403;
    ctx.body = {status:1013};// token过期
}

//  middleware
export default function (reqs: {method: string, path: string}[]) {
    return async function ( ctx: CtxType, next:() => Promise<any>) {
        for (const v of reqs) {
            if (ctx.path === v.path && ctx.method === v.method) {
                const userToken = ctx.cookies.get("userToken");
                if (!userToken) {
                    // 无token
                    notLogged(ctx);
                    return;
                } 
                // 验证token否过期
                const {err, parsedToken} = await parseUserToken(userToken);
                if (err) {
                    // token解析错误，可能是token过期或密钥错误
                    // console.log(err.message);
                    authenticationExpired(ctx);
                    return;
                }
                // token解析成功
                // 可获取token内容
                console.log(parsedToken.uid + " is verified and passed");
                // 验证通过继续向后
                break;
            }
        }
        // token解析无错误，继续
        await next();        
    }
}