import axios from "axios";
import { appconfig } from "src/appConfig"
const {apiRoot} = appconfig;
axios.defaults.baseURL =apiRoot;

async function searchHotKeysApi (succeed:(data:string[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`/hotsearch`);
    succeed(res.data.keys);
}
/**
 * 
 * @param keyword 
 * @param gameNum 
 * @param strategyNum 
 * @param succeed 
 * @param failed 
 */
async function searchApi(
    keyword:string,
    maxGameNum:number,
    strategyPageSize:number,
    succeed:(
        gameData:gameListItemI[],strategydata:strategyListItemI[]
    )=>void, 
    failed:(err:any)=>void
){

    try {
        const res  =  await axios.get(`/search?key=${keyword}&actnum=${strategyPageSize}`);
        succeed(res.data.data.games,res.data.data.strategies);
    } catch (error) {
        failed(error);
        
    }
}

async function searchStrategyApi(
    keyword:string,
    page:number,
    size:number,
    succeed:(
        data:strategyListItemI[]
    )=>void, 
    failed:(err:any)=>void
){
    // query key=[string]
    try {
        const res  =  await axios.get(`/searchstrgy?key=${keyword}&page=${page}&size=${size}`);
        succeed(res.data.strategies);
    } catch (error) {
        failed(error);
    }
}

export {
    searchHotKeysApi,
    searchApi,
    searchStrategyApi
}