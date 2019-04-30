import axios from "axios";
import { appconfig } from "src/appConfig"
const {apiRoot} = appconfig;
// for home
function strategyHotGameApi (succeed:(data:bannerWithIdItemI[])=>void, failed?:(err:any)=>void) {
    setTimeout(() => {
        const data:bannerWithIdItemI[] = [
            {imgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",id:"003"},
            {imgSrc:"//file.suafe.cn/blgc/gamecover/4.jpg",id:"004"},
            {imgSrc:"//file.suafe.cn/blgc/gamecover/3.jpg",id:"001"},
            {imgSrc:"//file.suafe.cn/blgc/gamecover/2.jpg",id:"005"},
            {imgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",id:"006"},
        ]
        succeed(data);
    }, 200);
}

async function strPageStrategyListApi (page:number,size:number,succeed:(data:strategyListItemI[])=>void, failed:(err:any)=>void) {
    try {
        const res  =  await axios.get(`${apiRoot}/strategylist?page=${page}&size=${size}`);
        succeed(res.data.page);
    } catch (error) {
        failed(error);
    }
    // const dataSource:strategyListItemI[]=[
    //     {
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题这是一个攻略标题这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/1.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"11"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/2.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"12"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/3.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"13"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/4.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/4.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"14"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题这是一个攻略标题这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/1.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"121"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/2.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"122"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/3.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"123"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/4.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/4.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"124"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题这是一个攻略标题这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/1.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"1202131"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/2.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"123242"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/3.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"123123"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/4.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/4.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"1234213"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题这是一个攻略标题这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/1.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"1231"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/2.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"1232"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/3.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"1233"
    //     },{
    //         publisherHeadSrc:"//file.suafe.cn/blgc/userhead/4.jpg",
    //         publisherName:"夏池萤",
    //         strategyTitle:"这是一个攻略标题",
    //         coverSrc:"//file.suafe.cn/blgc/strategycover/4.png",
    //         abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
    //         gameName:"阴阳师",
    //         strategyType:"角色测评",
    //         readNum:"12.3k",
    //         goodNum:"876",
    //         strategyId:"1234"
    //     },
    // ]
    // setTimeout(() => {
    //     const f = Math.random();
    //     if(f>0.2){
    //         const data = dataSource.slice(page*size,(page+1)*size);
    //         succeed(data);
    //     }else{
    //         const err:any ={statusCode:"500",msg:"err"}
    //         failed(err);
    //     }
    // }, 300);
}

export {
    strategyHotGameApi,
    strPageStrategyListApi
}