import * as Koa from "koa";

type CtxType = Koa.ParameterizedContext;


const apiRoutes:{
    path:string, 
    method:string,
    handleFunc:(ctx:CtxType) => void
}[] = [];

apiRoutes.push({ // test page
    method:"GET",
    path:"/testpage",
    handleFunc:async (ctx:CtxType)=>{
        ctx.body = `
        <h1>login page</h1>
        <form method="POST" action="/login">
          <p>uid</p>
          <input name="uid" /><br/>
          <p>pwd</p>
          <input name="pwd" type="password"/><br/>
          <input name="rememberme" type="checkbox"/>免登录
          <br/>
          <button type="submit">login</button>
        </form>
      `
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
        await next();
    }
}
