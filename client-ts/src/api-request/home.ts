// import axios from "axios";
// import { appconfig } from "src/appConfig"
// const {apiRoot} = appconfig


// for home
function homeBannerApi (succeed:(data:bannerItemI[])=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:bannerItemI[] = [
            {imgSrc:"//file.suafe.cn/blgc/activityimg/2.jpg",link:"/game/001"},
            {imgSrc:"//file.suafe.cn/blgc/activityimg/1.jpg",link:"1232323"},
            {imgSrc:"//file.suafe.cn/blgc/activityimg/3.jpg",link:"12"}
        ];
        succeed(data)

    }, 500);
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

    }, 500);
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

    }, 700);
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

    }, 800);
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
    }, 900);
}

// for home
function homeNewestActivityApi (succeed:(data:homeActivityItemI)=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:homeActivityItemI = {
            activityId:"12",
            coverSrc:"//file.suafe.cn/blgc/gamenews/2.png",
            gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",
            gameName:"崩坏三",
            activityIntro:"空之律者觉醒",
            gameScore:"8.4",
            gameId:"002"
        }
        succeed(data)
    }, 600);
}

// for home
function homePreviousActivityApi (page:number,size:number,succeed:(data:homeActivityItemI[])=>void, failed:(err:requestErrorI)=>void) {
    const dataSource:homeActivityItemI[]=[
        {
            activityId:"1",
            coverSrc:'//file.suafe.cn/blgc/gamenews/1.png',
            gameIconSrc:'//file.suafe.cn/blgc/gameicon/fgo.png',
            gameName:'命运-冠位指定',
            activityIntro:'这是一个活动简介',
            gameScore:'6.4',
            gameId:'1212'
        },{
            activityId:"2",
            coverSrc:'//file.suafe.cn/blgc/gamenews/2.png',
            gameIconSrc:'//file.suafe.cn/blgc/gameicon/bh3.png',
            gameName:'崩坏3rd',
            activityIntro:'这是一个活动简介',
            gameScore:'8.4',
            gameId:'1212'
        },{
            activityId:"3",
            coverSrc:'//file.suafe.cn/blgc/gamenews/3.png',
            gameIconSrc:'//file.suafe.cn/blgc/gameicon/mhmnz.png',
            gameName:'游戏名',
            activityIntro:'这是一个活动简介',
            gameScore:'6.4',
            gameId:'12212'
        },{
            activityId:"4",
            coverSrc:'//file.suafe.cn/blgc/gamenews/4.png',
            gameIconSrc:'//file.suafe.cn/blgc/gameicon/zs.png',
            gameName:'游戏名',
            activityIntro:'这是一个活动简介',
            gameScore:'6.4',
            gameId:'1212'
        },{
            activityId:"5",
            coverSrc:'//file.suafe.cn/blgc/gamenews/5.png',
            gameIconSrc:'//file.suafe.cn/blgc/gameicon/blhx.png',
            gameName:'碧蓝幻想',
            activityIntro:'这是一个活动简介',
            gameScore:'6.4',
            gameId:'1212'
        },{
            activityId:"6",
            coverSrc:'//file.suafe.cn/blgc/gamenews/1.png',
            gameIconSrc:'//file.suafe.cn/blgc/gameicon/zs.png',
            gameName:'游戏名',
            activityIntro:'这是一个活动简介',
            gameScore:'6.4',
            gameId:'1212'
        }
    ]
    setTimeout(() => {
        const f = Math.random();
        if(f>0.2){
            // 模拟成功
            const data = dataSource.slice(page*size,(page+1)*size);
            // 数据不足返回不足page的数组，无数据返回空数组
            succeed(data)
        }else{
            // 模拟失败
            const err:requestErrorI ={statusCode:"500",msg:"err"}
            failed(err);
        }
    }, 600);
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