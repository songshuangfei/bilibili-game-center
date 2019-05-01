import axios from "axios";
import { appconfig } from "src/appConfig"
const {apiRoot} = appconfig;
axios.defaults.baseURL =apiRoot;

enum rankApiTypes {
    hot,
    new,
    good,
}
/**
 * 
 * @param rankType ran list 类型
 * @param page 
 * @param size 
 * @param succeed 
 * @param failed 
 */
async function gameRankApi (type:rankApiTypes,page:number,size:number,succeed:(data:gameListItemI[])=>void, failed:(err:any)=>void) {
    let rankType="";
    switch(type){
    case rankApiTypes.hot:
        rankType = "hot";
        break;
    case rankApiTypes.new:
        rankType = "new";
        break;
    case rankApiTypes.good:
        rankType = "good";
        break;
    }
    try {
        const res  =  await axios.get(`/rank/${rankType}?page=${page}&size=${size}`);
        succeed(res.data.page);
    } catch (error) {
        failed(error);
    }
}

async function expectGameRankApi (page:number,size:number,succeed:(data:newGameListItemI[])=>void, failed:(err:any)=>void) {
    try {
        const res  =  await axios.get(`/rank/expect?page=${page}&size=${size}`);
        succeed(res.data.page);
    } catch (error) {
        failed(error);
    }
}

export {
    gameRankApi,
    rankApiTypes,
    expectGameRankApi
}