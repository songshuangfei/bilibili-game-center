import * as Koa from "koa";
import getJson from "../db/getJson";

type CtxType = Koa.ParameterizedContext;

// route 
const apiRoutes:{
    path:string, 
    method:string,
    handleFunc:(ctx:CtxType) => void
}[] = [];

// add route 
apiRoutes.push({
    method:"GET",
    path:"/homebanner",
    handleFunc:async (ctx:CtxType)=>{
        let result = await getJson("homeBanner.json");
        ctx.body = {data:result};
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