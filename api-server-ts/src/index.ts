import * as Koa from "koa";
import { 
    logger, 
    cros, 
    userIdentify 
} from "./middlewares";

import { 
    normalApi,
    userApi, 
    notFound,
    testPage
} from "./routes";

const app=new Koa();

app.use(logger());
app.use(cros());
app.use(normalApi());

app.use(testPage());// 开发中测试api的页面

// user api前的身份验证
// 哪些请求需要验证token后才能继续
app.use(userIdentify([
    {method: "GET",path: "/login"},
]));

app.use(userApi());
app.use(notFound());

app.listen(8000);

