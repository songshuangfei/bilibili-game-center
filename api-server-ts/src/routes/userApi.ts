import * as Koa from "koa";
import * as fs from "fs";
import { parsePostData } from "../utility";
import { createUserToken } from "../token/userToken";

// config
const { cookieMaxAge } = JSON.parse(fs.readFileSync("appConfig.json").toString());;

type CtxType = Koa.ParameterizedContext;
// routes
const apiRoutes:{
    path:string, 
    method:string,
    handleFunc:(ctx:CtxType) => void
}[] = [];

/*  
status
登录登出：100x
用户操作、认证有关：101x
*/

// add route 
// 输入密码登录
apiRoutes.push({
    method:"POST",
    path:"/login",
    handleFunc:async (ctx:CtxType)=>{
        // ctx.cookies.set();
        let postBody = await parsePostData(ctx);
        if (postBody.uid === "001" && postBody.pwd === "123456") {
            // 生成token
            const token = createUserToken(postBody.uid); 
            // 设置cookie
            ctx.cookies.set("uid",postBody.uid, {maxAge: cookieMaxAge*24*60*60*1000});

            // 是否保存登录状态
            if (postBody.rememberme === 'on') {
                // 保存cookie
                ctx.cookies.set("userToken", token , {maxAge: cookieMaxAge*24*60*60*1000});
            } else {
                // 会话cookie
                ctx.cookies.set("userToken", token );
            }
            // res
            ctx.body = {status: 1001};// 登录成功
        } else {
            ctx.body = {status: 1002};// 密码错误
        }
    }
});

// 登出，会清除客户端token
apiRoutes.push({
    method:"GET",
    path:"/logout",
    handleFunc:async (ctx:CtxType)=>{
        // 已经被前面中间件验证
        ctx.cookies.set('userToken','',{signed:false,maxAge:0})
        ctx.body = {status:1001};
    }
});

// token未过期返回
// 自动登录
apiRoutes.push({
    method:"GET",
    path:"/login",
    handleFunc:async (ctx:CtxType)=>{
        // 已经被前面中间件验证
        ctx.body = {status: 1011};
    }
});

apiRoutes.push({
    method:"GET",
    path:"/follow",
    handleFunc:async (ctx:CtxType)=>{
        // 已经被前面中间件验证
        ctx.body = {status:1011};
    }
});

export default function () {
    return async function ( ctx: CtxType, next:()=>Promise<any>) {
        for(const route of apiRoutes){
            if(route.path === ctx.path && route.method === ctx.method) {
                await route.handleFunc(ctx);
                return;
            }
        }
        // 未匹配到路由，继续
        await next();
    }
}