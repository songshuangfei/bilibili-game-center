import {
    createUserToken,
    parseUserToken
} from "./userToken";
import * as assert from "assert";

describe("token/userToken 模块测试",function(){
    it("创建token",function(){
        let uid = "001";
        const token = createUserToken(uid); 
    });

    it("解析token",async function(){
        let uid = "001";
        const token = createUserToken(uid); 
        const {err, parsedToken} = await parseUserToken(token);
        assert.ok(function(){
            if(err !== null){
                return false;
            }
            if(parsedToken.uid !== uid){
                return false;
            }
            return true;
        }())
    })
});