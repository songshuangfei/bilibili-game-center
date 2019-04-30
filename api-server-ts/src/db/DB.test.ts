import DB from "./DB";
import * as assert from "assert";

describe("db/DB",function(){
    it("只读表",async function(){
        let db =new DB()
        let rows = await db.useTable("users").result();
        assert.notEqual(rows.length,0)
    });

    it("条件筛选行",async function(){
        let db =new DB()
        let rows = await db.useTable("publishedGames").where("score",7.8).result();
        assert.ok((function(){
            for (const v of rows) {
                if(v.score !== 7.8){
                    return false;
                }
            }
            return true;
        })());
    });

    it("列筛选",async function(){
        let db =new DB()
        let cols:string[] = ["uid","userName","sex","lv"];
        let rows = await db.useTable("users").select(...cols).where("uid","001").result();
        assert.ok(function(){
            for (const col in rows[0]) {
                if(cols.indexOf(col)===-1){
                    return false;
                }
            };
            return true;
        }());
    });
});
