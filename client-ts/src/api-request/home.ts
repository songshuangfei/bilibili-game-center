import axios from "axios";
import { appconfig } from "src/appConfig"
const {apiRoot} = appconfig


// withCredentials: true
// for home
async function homeBannerApi (succeed:(data:bannerItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`${apiRoot}/homebanner`);
    succeed(res.data.homeBanner );
}

async function homeStrategyApi (succeed:(data:homeStrategyItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`${apiRoot}/videostrategy?num=6`);
    succeed(res.data.list );
}

async function homeHotGamesApi (succeed:(data:gameIconItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`${apiRoot}/hotgames?type=basic&num=10`);
    succeed(res.data.list );
}

async function homeNewGamesApi (succeed:(data:gameIconItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`${apiRoot}/newgames?type=basic&num=10`);
    succeed(res.data.list );
}

async function homeOrderGameApi (succeed:(data:homeOrderGameItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`${apiRoot}/ordergames?type=banner&num=10`);
    succeed(res.data.list );
}

async function homeNewestActivityApi (succeed:(data:homeActivityItemI)=>void, failed?:()=>void) {
    const res  =  await axios.get(`${apiRoot}/activity/newest`);
    succeed(res.data.item);
}

async function homePreviousActivityApi (page:number,size:number,succeed:(data:homeActivityItemI[])=>void, failed:(err:any)=>void) {
    try {
        const res  =  await axios.get(`${apiRoot}/activity/prev?page=${page}&size=${size}`);
        succeed(res.data.page);
    } catch (error) {
        failed(error);
    }
}


export {
    homeBannerApi,
    homeHotGamesApi,
    homeStrategyApi,
    homeNewGamesApi,
    homeOrderGameApi,
    homeNewestActivityApi,
    homePreviousActivityApi,
}