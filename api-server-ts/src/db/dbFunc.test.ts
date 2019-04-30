import {
    hotGameListPaging,
    goodGameListPaging,
    newGameListPaging,
    expectGameListPaging,
    gameActivityNewestone,
    gameActivityPrev,
    strategyNewestList
} from "./dbFunc";
import * as assert from "assert";

describe('db/dbFunc模块测试', function() {
    it('列表游戏热门指数依次递减',async function() {
        let a = await hotGameListPaging(1,4,["gameName","hotIndex"]);
        assert.notEqual(a[0].gameName,"");
        assert.notEqual(a[0].gameName,undefined);
        assert.ok(a[0].hotIndex >= a[1].hotIndex);
    });

    it('列表游戏分数依次递减',async function() {
        let a = await goodGameListPaging(1,4,["gameName","score"]);
        assert.notEqual(a[0].gameName,"");
        assert.notEqual(a[0].gameName,undefined);
        assert.ok(a[0].score >= a[1].score);
    });

    it('列表游戏发行日期依次递减',async function() {
        let a = await newGameListPaging(1,4,["gameName","publishDate"]);
        let d1 = new Date(a[0].publishDate),
            d2 = new Date(a[1].publishDate);
        assert.notEqual(a[0].gameName,"");
        assert.notEqual(a[0].gameName,undefined);
        assert.ok(d1 >= d2);
    });

    it('列表游戏预约人数期依次递减',async function() {
        let a = await expectGameListPaging(1,4,["gameName","orderNum"]);
        assert.notEqual(a[0].gameName,"");
        assert.notEqual(a[0].gameName,undefined);
        assert.ok(a[0].orderNum > a[1].orderNum);
    });

    it('最新活动',async function() {
        let a = await gameActivityNewestone();
        assert.notEqual(JSON.stringify(a),"{}");
    });
    it('最新活动列表时间依次递减',async function() {
        let a = await gameActivityPrev(1,2,true);
        let d1 = new Date(a[0].publishDate),
            d2 = new Date(a[1].publishDate);
        assert.ok(d1 >= d2);
    });

    it('最新攻略列表时间依次递减',async function() {
        let a = await strategyNewestList(1,2,true);
        let d1 = new Date(a[0].publishDate),
            d2 = new Date(a[1].publishDate);
        assert.ok(d1 >= d2);
    });
});

