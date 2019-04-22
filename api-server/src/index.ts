import * as Koa from "koa";
import router from "./routes"
const app=new Koa();

/*启动路由*/
app.use(router.routes())   
    .use(router.allowedMethods());   

app.listen(8000);