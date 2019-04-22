"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const routes_1 = require("./routes");
const app = new Koa();
/*启动路由*/
app.use(routes_1.default.routes())
    .use(routes_1.default.allowedMethods());
app.listen(8000);
//# sourceMappingURL=index.js.map