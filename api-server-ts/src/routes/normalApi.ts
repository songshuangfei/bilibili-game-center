import * as Koa from "koa";
import { DB } from "../db";
import { 
    hotGameListPaging,
    goodGameListPaging,
    newGameListPaging,
    expectGameListPaging,
    gameActivityNewestone,
    gameActivityPrev,
    strategyNewestList
} from "../db/dbFunc";

type CtxType = Koa.ParameterizedContext;

function badRequestHandler(ctx:CtxType){
    ctx.status = 400;
    ctx.body = "bad request";
}

function isPagingQueryAvalible(ctx:CtxType):boolean{
    if( !ctx.query.size||
        !ctx.query.page||
        !Number(ctx.query.page)||
        !Number(ctx.query.size)
    ){
        return false;
    }
    return true;
}
// route 
const apiRoutes:{
    path:string, 
    method:string,
    handleFunc:(ctx:CtxType) => void
}[] = [];

// add route 
apiRoutes.push({
    method:"GET",
    path:"/userinfo",
    handleFunc:async (ctx:CtxType)=>{
        let db = new DB();
        let data = await db.useTable("users").select("uid","userName","headPicSrc").where("uid","001").result();
        ctx.body = {data:data};
    }
});

// add route 
apiRoutes.push({
    method:"GET",
    path:"/homebanner",
    handleFunc:async (ctx:CtxType)=>{
        let db = new DB();
        let data = await db.useTable("homeBanner").result();
        ctx.body = {homeBanner:data};
    }
});

apiRoutes.push({
    method:"GET",
    path:"/findbanner",
    handleFunc:async (ctx:CtxType)=>{
        let db = new DB();
        let homeBanners = await db.useTable("findBanner").result();
        ctx.body = {data:homeBanners};
    }
});

// query page=[number]&size=[number]
apiRoutes.push({
    method:"GET",
    path:"/rank/hot",
    handleFunc:async (ctx:CtxType)=>{
        if(!isPagingQueryAvalible(ctx)){
            badRequestHandler(ctx);
            return;
        }
        let rows = await hotGameListPaging(ctx.query.page,ctx.query.size,[
            "gameId","gameName","gameIconSrc","gameType","gameSize","score"
        ]);
        ctx.body = {page:rows};
    }
});

// query page=[number]&size=[number]
apiRoutes.push({
    method:"GET",
    path:"/rank/good",
    handleFunc:async (ctx:CtxType)=>{
        if(!isPagingQueryAvalible(ctx)){
            badRequestHandler(ctx);
            return;
        }
        let rows = await goodGameListPaging(ctx.query.page,ctx.query.size,[
            "gameId","gameName","gameIconSrc","gameType","gameSize","score"
        ]);
        ctx.body = {page:rows};
    }
});

// query page=[number]&size=[number]
apiRoutes.push({
    method:"GET",
    path:"/rank/new",
    handleFunc:async (ctx:CtxType)=>{
        if(!isPagingQueryAvalible(ctx)){
            badRequestHandler(ctx);
            return;
        }
        let rows = await newGameListPaging(ctx.query.page,ctx.query.size,[
            "gameId","gameName","gameIconSrc","gameType","gameSize","score"
        ]);
        ctx.body = {page:rows};
    }
});

// query page=[number]&size=[number]
apiRoutes.push({
    method:"GET",
    path:"/rank/expect",
    handleFunc:async (ctx:CtxType)=>{
        if(!isPagingQueryAvalible(ctx)){
            badRequestHandler(ctx);
            return;
        }
        let rows = await expectGameListPaging(ctx.query.page,ctx.query.size,[
            "gameId","gameName","gameIconSrc","gameType","orderNum"
        ]);
        ctx.body = {page:rows};
    }
});

// query type=[string]&num=[number]
apiRoutes.push({
    method:"GET",
    path:"/hotgames",
    handleFunc:async (ctx:CtxType)=>{
        if( !ctx.query.type || 
            !ctx.query.num ||
            !Number(ctx.query.num)
        ){
            badRequestHandler(ctx);
            return;
        }
        let keys:string[] =[];
        switch(ctx.query.type){
        case "basic":
            keys =["gameId","gameName","gameIconSrc"];
            break;
        case "all":
            keys = ["gameId","gameName","gameIconSrc","gameType","gameSize","score"];
            break;
        default:
            badRequestHandler(ctx);
            return;
        }
        let rows = await hotGameListPaging(1,ctx.query.num,keys);
        ctx.body = {data:rows};
    }
});

// query none
apiRoutes.push({
    method:"GET",
    path:"/activity/newest",
    handleFunc:async (ctx:CtxType)=>{
        let item = await gameActivityNewestone();
        ctx.body = {item:item};
    }
});

// query page=[number]&size=[number]
apiRoutes.push({
    method:"GET",
    path:"/activity/prev",
    handleFunc:async (ctx:CtxType)=>{
        if(!isPagingQueryAvalible(ctx)){
            badRequestHandler(ctx);
            return;
        }
        let rows = await gameActivityPrev(ctx.query.page,ctx.query.size);
        ctx.body = {page:rows};
    }
});

// query page=[number]&size=[number]
apiRoutes.push({
    method:"GET",
    path:"/strategylist",
    handleFunc:async (ctx:CtxType)=>{
        if(!isPagingQueryAvalible(ctx)){
            badRequestHandler(ctx);
            return;
        }
        let rows = await strategyNewestList(ctx.query.page,ctx.query.size);
        ctx.body = {page:rows};
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