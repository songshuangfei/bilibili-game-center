import axios from "axios";
import { appconfig } from "src/appConfig"
const {apiRoot} = appconfig;
// for home
async function strategyHotGameApi (succeed:(data:bannerWithIdItemI[])=>void, failed?:(err:any)=>void) {
    const res  =  await axios.get(`${apiRoot}/hotgames/banner?num=6`);
    succeed(res.data.list);
}

async function strPageStrategyListApi (page:number,size:number,succeed:(data:strategyListItemI[])=>void, failed:(err:any)=>void) {
    try {
        const res  =  await axios.get(`${apiRoot}/strategylist?page=${page}&size=${size}`);
        succeed(res.data.page);
    } catch (error) {
        failed(error);
    }
}

export {
    strategyHotGameApi,
    strPageStrategyListApi
}