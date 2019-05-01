import axios from "axios";
import { appconfig } from "src/appConfig"
const {apiRoot} = appconfig;
axios.defaults.baseURL =apiRoot;


// withCredentials: true
// for home
async function homeBannerApi (succeed:(data:bannerItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`/homebanner`);
    succeed(res.data.homeBanner );
}

async function homeStrategyApi (succeed:(data:homeStrategyItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`/videostrategy?num=6`);
    succeed(res.data.list );
}

async function homeHotGamesApi (succeed:(data:gameIconItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`/hotgames?type=basic&num=10`);
    succeed(res.data.list );
}

async function homeNewGamesApi (succeed:(data:gameIconItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`/newgames?type=basic&num=10`);
    succeed(res.data.list );
}

async function homeOrderGameApi (succeed:(data:homeOrderGameItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`/ordergames?type=banner&num=10`);
    succeed(res.data.list );
}

async function homeNewestActivityApi (succeed:(data:homeActivityItemI)=>void, failed?:()=>void) {
    const res  =  await axios.get(`/activity/newest`);
    succeed(res.data.item);
}

async function homePreviousActivityApi (page:number,size:number,succeed:(data:homeActivityItemI[])=>void, failed:(err:any)=>void) {
    try {
        const res  =  await axios.get(`/activity/prev?page=${page}&size=${size}`);
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