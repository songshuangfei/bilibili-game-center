import getJson from "./getJson";
import * as assert from "assert";
import * as fs from "fs";
const { mediaFileRoot } = JSON.parse(fs.readFileSync("appConfig.json").toString());;

describe('db/getJson模块测试（json读取和预处理）', function() {
    it("users.json 读取&预处理", async function(){
        let data = await getJson("users");
        let headPicSrc = String( data[0].headPicSrc),
            coverSrc = String(data[0].coverSrc);
        assert.equal(headPicSrc.indexOf(mediaFileRoot),0);
        assert.equal(coverSrc.indexOf(mediaFileRoot),0);
    });

    it("homeBanner.json 读取&预处理", async function(){
        let data = await getJson("homeBanner");
        let imgSrc = String( data[0].imgSrc);
        assert.equal(imgSrc.indexOf(mediaFileRoot),0);
    });

    it("findBanner.json 读取&预处理", async function(){
        let data = await getJson("findBanner");
        let imgSrc = String( data[0].imgSrc);
        assert.equal(imgSrc.indexOf(mediaFileRoot),0);
    });

    it("publishedGames.json 读取&预处理", async function(){
        let data = await getJson("publishedGames");
        let gameIconSrc = String( data[0].gameIconSrc);
        assert.equal(gameIconSrc.indexOf(mediaFileRoot),0);
    });

    it("unpublishedGames.json 读取&预处理", async function(){
        let data = await getJson("unpublishedGames");
        let gameIconSrc = String( data[0].gameIconSrc);
        assert.equal(gameIconSrc.indexOf(mediaFileRoot),0);
    });

    it("strategys.json 读取&预处理", async function(){
        let data = await getJson("strategys");
        let coverSrc = String( data[0].coverSrc);
        assert.equal(coverSrc.indexOf(mediaFileRoot),0);
    });

    it("gameActivities.json 读取&预处理", async function(){
        let data = await getJson("gameActivities");
        let coverSrc = String( data[0].coverSrc);
        assert.equal(coverSrc.indexOf(mediaFileRoot),0);
    });
});


