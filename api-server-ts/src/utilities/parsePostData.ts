import * as Koa from "koa";
import parseQueryStr from "./parseQueryStr"


type CtxType = Koa.ParameterizedContext;

export default function (ctx: CtxType,dataType:string) {
    return new Promise<any>((rs, rj) => {
        try {
            let postdata = "";
            ctx.req.addListener("data", data => {
                postdata += data
            });
            ctx.req.addListener("end",function(){
                if(dataType === "query"){
                    rs(parseQueryStr(postdata));
                }
                if(dataType="josn"){
                    rs(JSON.parse(postdata));
                }
            });
        } catch ( err ) {
            rj(err);
        }
    })
    
}