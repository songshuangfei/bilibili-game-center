import axios from "axios";
import { appconfig } from "src/appConfig"
const {apiRoot} = appconfig;
axios.defaults.baseURL =apiRoot;

async function findBannerApi (succeed:(data:bannerItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`/findbanner`);
    succeed(res.data.findBanner);
}

async function findOrderNewGameApi (succeed:(data:gameIconItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`/ordergames?type=basic&num=8`);
    succeed(res.data.list);
}

async function findSpecialsApi (succeed:(data:bannerWithIdItemI[])=>void, failed?:()=>void) {
    // 这里是代替的api
    const res  =  await axios.get(`/hotgames/banner?num=8`);
    succeed(res.data.list);
}

async function findBiliGamesApi (succeed:(data:gameIconItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`/biligames?type=basic&num=6`);
    succeed(res.data.list);
}

async function findPayGamesApi (succeed:(data:gameIconItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`/paygames?type=basic&num=6`);
    succeed(res.data.list);
}

async function findHotCommentsApi (succeed:(data:findHotCommentItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`/hotcomments?num=6`);
    succeed(res.data.list);
}


async function findGameClassifyApi (page:number,size:number,succeed:(data:findGameClassifyItemI[])=>void, failed:(err:any)=>void) {
    try {
        const res  =  await axios.get(`/gameclassify?page=${page}&size=${size}`);
        succeed(res.data.page);
    } catch (error) {
        failed(error)
    }
}

export {
    findBannerApi,
    findOrderNewGameApi,
    findSpecialsApi,
    findBiliGamesApi,
    findPayGamesApi,
    findHotCommentsApi,
    findGameClassifyApi,
}