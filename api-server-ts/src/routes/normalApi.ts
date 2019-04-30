import * as Koa from "koa";
import { DB } from "../db";
import { 
    hotGameListPaging,
    goodGameListPaging,
    newGameListPaging,
    expectGameListPaging,
    gameActivityNewestone,
    gameActivityPrev,
    strategyNewestList,
    hotCommentPaging,
    gameClassifypaging,
    search,
    strategySearchList
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

// routes
const apiRoutes:{
    path:string, 
    method:string,
    handleFunc:(ctx:CtxType) => void
}[] = [];

// add route 
/*------------------------------banner ↓-----------------------------------*/
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
        let data = await db.useTable("findBanner").result();
        ctx.body = {findBanner:data};
    }
});
/*------------------------------banner ↑-----------------------------------*/



/*------------------------------rank list ↓-----------------------------------*/
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
/*------------------------------rank list ↑-----------------------------------*/



/*------------------------------activity ↓-----------------------------------*/
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
/*------------------------------activity ↑-----------------------------------*/


/*------------------------------paging ↓-----------------------------------*/
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

// query page=[number]&size=[number]
apiRoutes.push({
    method:"GET",
    path:"/gameclassify",
    handleFunc:async (ctx:CtxType)=>{
        if(!isPagingQueryAvalible(ctx)){
            badRequestHandler(ctx);
            return;
        }
        let rows = await gameClassifypaging(ctx.query.page,ctx.query.size);
        ctx.body = {page:rows};
    }
});
/*------------------------------paging ↑-----------------------------------*/




/*------------------------------list ↓-----------------------------------*/
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
        ctx.body = {list:rows};
    }
});


// query type=[string]&num=[number]
apiRoutes.push({
    method:"GET",
    path:"/newgames",
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
        let rows = await newGameListPaging(1,ctx.query.num,keys);
        ctx.body = {list:rows};
    }
});

// query type=[string]&num=[number]
apiRoutes.push({
    method:"GET",
    path:"/ordergames",
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
            keys = ["gameId","gameName","gameIconSrc"];
            break;
        case "banner":
            keys = ["gameId","gameName","gameCover","orderNum"];
            break;
        default:
            badRequestHandler(ctx);
            return;
        }
        let rows = await expectGameListPaging(1,ctx.query.num,keys);
        ctx.body = {list:rows};
    }
});


// query num=[number]
apiRoutes.push({
    method:"GET",
    path:"/videostrategy",
    handleFunc:async (ctx:CtxType)=>{
        if( !ctx.query.num ||
            !Number(ctx.query.num)
        ){
            badRequestHandler(ctx);
            return;
        }

        let db = new DB();
        let rows = await db.useTable("videoStrategy").result();
        ctx.body = {list:rows.slice(0,ctx.query.num)};
    }
});

// query none
apiRoutes.push({
    method:"GET",
    path:"/hotgames/banner",
    handleFunc:async (ctx:CtxType)=>{
        if( !ctx.query.num ||
            !Number(ctx.query.num)
        ){
            badRequestHandler(ctx);
            return;
        }
        let rows = await hotGameListPaging(1,ctx.query.num,[
            "gameId","gameCover"
        ]);
        let res:any[] = [];
        for (const row of rows) {
            res.push({
                imgSrc:row.gameCover,
                id:row.gameId
            })
        }
        ctx.body = {list:res};
    }
});



// query type=[string]&num=[number]
apiRoutes.push({
    method:"GET",
    path:"/biligames",
    handleFunc:async (ctx:CtxType)=>{
        if( !ctx.query.num ||
            !Number(ctx.query.num)
        ){
            badRequestHandler(ctx);
            return;
        }

        let keys:string[] = [];
        switch(ctx.query.type){
            case "basic":
                keys = ["gameId","gameName","gameIconSrc"];
                break;
            case "all":
                keys = ["gameId","gameName","gameIconSrc","gameType","gameSize","score"];
                break;
            default:
                badRequestHandler(ctx);
                return;
            }

        let db = new DB();
        let rows = await db.useTable("publishedGames")
            .select(...keys)
            .where("isBiliGame",true)
            .result();
        ctx.body = {list:rows.slice(0,ctx.query.num)};
    }
});


// query type=[string]&num=[number]
apiRoutes.push({
    method:"GET",
    path:"/paygames",
    handleFunc:async (ctx:CtxType)=>{
        if( !ctx.query.num ||
            !Number(ctx.query.num)
        ){
            badRequestHandler(ctx);
            return;
        }

        let keys:string[] = [];
        switch(ctx.query.type){
            case "basic":
                keys = ["gameId","gameName","gameIconSrc"];
                break;
            case "all":
                keys = ["gameId","gameName","gameIconSrc","gameType","gameSize","score"];
                break;
            default:
                badRequestHandler(ctx);
                return;
            }

        let db = new DB();
        let rows = await db.useTable("publishedGames")
            .select(...keys)
            .where("isPayGame",true)
            .result();
        ctx.body = {list:rows.slice(0,ctx.query.num)};
    }
});

// query num=[number]
apiRoutes.push({
    method:"GET",
    path:"/hotcomments",
    handleFunc:async (ctx:CtxType)=>{
        if( !ctx.query.num ||
            !Number(ctx.query.num)
        ){
            badRequestHandler(ctx);
            return;
        }

        let rows = await hotCommentPaging(1,ctx.query.num);
        ctx.body = {list:rows};
    }
});

// query num=[number]
apiRoutes.push({
    method:"GET",
    path:"/hotsearch",
    handleFunc:async (ctx:CtxType)=>{
        ctx.body = {keys: ["崩坏","fgo","Fate","约会大作战","崩坏3rd","第五人格","妈妈把我的游戏藏起来了"]};
    }
});

// query key=[string]&actnum=[number]
apiRoutes.push({
    method:"GET",
    path:"/search",
    handleFunc:async (ctx:CtxType)=>{
        if( !ctx.query.key ||
            !ctx.query.actnum ||
            !Number(ctx.query.actnum)
        ){
            badRequestHandler(ctx);
            return;
        }
        let data = await search(ctx.query.key,ctx.query.actnum)
        ctx.body = {data: data};
    }
});

// query key=[string]&page=[string]&size=[number]
apiRoutes.push({
    method:"GET",
    path:"/searchstrgy",
    handleFunc:async (ctx:CtxType)=>{
        console.log(ctx.query.key,ctx.query.page,ctx.query.size)
        if(!isPagingQueryAvalible(ctx)||!ctx.query.key){
            badRequestHandler(ctx);
            return;
        }
        let data = await strategySearchList(ctx.query.key,ctx.query.page,ctx.query.size)
        ctx.body = {strategies: data};
    }
});
/*------------------------------list ↑-----------------------------------*/
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