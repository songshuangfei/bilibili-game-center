import axios from "axios";
import { appconfig } from "src/appConfig"
const {apiRoot} = appconfig;

async function searchHotKeysApi (succeed:(data:string[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`${apiRoot}/hotsearch`);
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
        const res  =  await axios.get(`${apiRoot}/search?key=${keyword}&actnum=${strategyPageSize}`);
        succeed(res.data.data.games,res.data.data.activities);
    } catch (error) {
        failed(error);
        
    }
}

function searchStrategyApi(
    keyword:string,
    page:number,
    size:number,
    succeed:(
        data:strategyListItemI[]
    )=>void, 
    failed:(err:any)=>void
){
    succeed([]);
    // 没做
}

export {
    searchHotKeysApi,
    searchApi,
    searchStrategyApi
}