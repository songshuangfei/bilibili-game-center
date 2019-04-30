import axios from "axios";
import { appconfig } from "src/appConfig"
const {apiRoot} = appconfig


// withCredentials: true

// for home
async function homeBannerApi (succeed:(data:bannerItemI[])=>void, failed?:()=>void) {
    const res  =  await axios.get(`${apiRoot}/homebanner`);
    succeed(res.data.homeBanner );
}

// for home
function homeStrategyApi (succeed:(data:homeStrategyItemI[])=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:homeStrategyItemI[] =[
            {coverImgSrc:"//file.suafe.cn/blgc/videocover/1.jpg",look:1032,good:20,summary:"【角色测评】这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:"1"},
            {coverImgSrc:"//file.suafe.cn/blgc/videocover/2.jpg",look:10,good:20,summary:"【角色测评】这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:"2"},
            {coverImgSrc:"//file.suafe.cn/blgc/videocover/3.jpg",look:12,good:20,summary:"【角色测评】这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:"3"},
            {coverImgSrc:"//file.suafe.cn/blgc/videocover/4.jpg",look:120,good:20,summary:"这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:"4"},
            {coverImgSrc:"//file.suafe.cn/blgc/videocover/1.jpg",look:130,good:20,summary:"这是一条攻略的摘要，这是一条攻略的摘要，",gameName:"崩坏三",strategyId:"5"},
            {coverImgSrc:"//file.suafe.cn/blgc/videocover/1.jpg",look:130,good:20,summary:"这是一条攻略的摘要。。。",gameName:"崩坏三",strategyId:"6"},
        ]
        succeed(data)

    }, 200);
}

// for home
function homeHotGamesApi (succeed:(data:gameIconItemI[])=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:gameIconItemI[] = [
            {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
            {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
            {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
            {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
            {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
        ]
        succeed(data)

    }, 300);
}

// for home
function homeNewGamesApi (succeed:(data:gameIconItemI[])=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:gameIconItemI[] = [
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
            {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
            {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
            {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
            {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
            {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
        ];
        succeed(data)

    }, 100);
}

// for home
function homeOrderGameApi (succeed:(data:homeOrderGameItemI[])=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:homeOrderGameItemI[] =[
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/4.jpg",gameId:"1",gameName:"第五人格",orderedNum:8987},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/3.jpg",gameId:"2",gameName:"Fate grand order",orderedNum:228223},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",gameId:"3",gameName:"第五人格1爱神的箭噶法国",orderedNum:2347},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/2.jpg",gameId:"4",gameName:"第五人格2",orderedNum:8987},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/2.jpg",gameId:"5",gameName:"第五人格2",orderedNum:89287},
        ]
        succeed(data)
    }, 200);
}

// for home
async function homeNewestActivityApi (succeed:(data:homeActivityItemI)=>void, failed?:()=>void) {
    const res  =  await axios.get(`${apiRoot}/activity/newest`);
    succeed(res.data.item);
    console.log(res.data.item)
}

// for home
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