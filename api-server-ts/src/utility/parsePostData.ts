import * as Koa from "koa";
import parseQueryStr from "./parseQueryStr"


type CtxType = Koa.ParameterizedContext;


export default function (ctx: CtxType) {
    return new Promise<any>((rs, rj) => {
        try {
            let postdata = "";
            ctx.req.addListener("data", data => {
                postdata += data
            });
     
            ctx.req.addListener("end",function(){
                let postbody = parseQueryStr(postdata)
                rs( postbody );
            });
        } catch ( err ) {
            rj(err);
        }
    })
    
}