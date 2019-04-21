function searchHotKeysApi (succeed:(data:string[])=>void, failed?:()=>void) {
    setTimeout(() => {
        const data = ["Fate","约会大作战","崩坏3rd","第五人格","妈妈把我的游戏藏起来了"]
        succeed(data)
    }, 500);
}


const gameSourceData:gameListItemI[]=[
    {gameId:"0051",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",score:3},
    {gameId:"0011",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",score:3},
    {gameId:"0012",gameName:"崩坏3ed",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"卡牌",gameSize:"568M",score:3},
];

const strategySourceData:strategyListItemI[] =[
    {
        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
        publisherName:"夏池萤",
        strategyTitle:"这是一个攻略标题这是一个攻略标题这是一个攻略标题",
        coverSrc:"//file.suafe.cn/blgc/strategycover/1.png",
        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
        gameName:"阴阳师",
        strategyType:"角色测评",
        readNum:"12.3k",
        goodNum:"876",
        strategyId:"11"
    },{
        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
        publisherName:"夏池萤",
        strategyTitle:"这是一个攻略标题",
        coverSrc:"//file.suafe.cn/blgc/strategycover/2.png",
        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
        gameName:"阴阳师",
        strategyType:"角色测评",
        readNum:"12.3k",
        goodNum:"876",
        strategyId:"12"
    },{
        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
        publisherName:"夏池萤",
        strategyTitle:"这是一个攻略标题",
        coverSrc:"//file.suafe.cn/blgc/strategycover/3.png",
        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
        gameName:"阴阳师",
        strategyType:"角色测评",
        readNum:"12.3k",
        goodNum:"876",
        strategyId:"13"
    },{
        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/4.jpg",
        publisherName:"夏池萤",
        strategyTitle:"这是一个攻略标题",
        coverSrc:"//file.suafe.cn/blgc/strategycover/4.png",
        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
        gameName:"阴阳师",
        strategyType:"角色测评",
        readNum:"12.3k",
        goodNum:"876",
        strategyId:"14"
    }, {
        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
        publisherName:"夏池萤",
        strategyTitle:"这是一个攻略标题这是一个攻略标题这是一个攻略标题",
        coverSrc:"//file.suafe.cn/blgc/strategycover/1.png",
        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
        gameName:"阴阳师",
        strategyType:"角色测评",
        readNum:"12.3k",
        goodNum:"876",
        strategyId:"121"
    },{
        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
        publisherName:"夏池萤",
        strategyTitle:"这是一个攻略标题",
        coverSrc:"//file.suafe.cn/blgc/strategycover/2.png",
        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
        gameName:"阴阳师",
        strategyType:"角色测评",
        readNum:"12.3k",
        goodNum:"876",
        strategyId:"122"
    },{
        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
        publisherName:"夏池萤",
        strategyTitle:"这是一个攻略标题",
        coverSrc:"//file.suafe.cn/blgc/strategycover/3.png",
        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
        gameName:"阴阳师",
        strategyType:"角色测评",
        readNum:"12.3k",
        goodNum:"876",
        strategyId:"123"
    },{
        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/4.jpg",
        publisherName:"夏池萤",
        strategyTitle:"这是一个攻略标题",
        coverSrc:"//file.suafe.cn/blgc/strategycover/4.png",
        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
        gameName:"阴阳师",
        strategyType:"角色测评",
        readNum:"12.3k",
        goodNum:"876",
        strategyId:"124"
    }, {
        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
        publisherName:"夏池萤",
        strategyTitle:"这是一个攻略标题这是一个攻略标题这是一个攻略标题",
        coverSrc:"//file.suafe.cn/blgc/strategycover/1.png",
        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
        gameName:"阴阳师",
        strategyType:"角色测评",
        readNum:"12.3k",
        goodNum:"876",
        strategyId:"1231"
    },{
        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
        publisherName:"夏池萤",
        strategyTitle:"这是一个攻略标题",
        coverSrc:"//file.suafe.cn/blgc/strategycover/2.png",
        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
        gameName:"阴阳师",
        strategyType:"角色测评",
        readNum:"12.3k",
        goodNum:"876",
        strategyId:"1232"
    },{
        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
        publisherName:"夏池萤",
        strategyTitle:"这是一个攻略标题",
        coverSrc:"//file.suafe.cn/blgc/strategycover/3.png",
        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
        gameName:"阴阳师",
        strategyType:"角色测评",
        readNum:"12.3k",
        goodNum:"876",
        strategyId:"1233"
    },{
        publisherHeadSrc:"//file.suafe.cn/blgc/userhead/4.jpg",
        publisherName:"夏池萤",
        strategyTitle:"这是一个攻略标题",
        coverSrc:"//file.suafe.cn/blgc/strategycover/4.png",
        abstract:"这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要，这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要这是一条攻略摘要",
        gameName:"阴阳师",
        strategyType:"角色测评",
        readNum:"12.3k",
        goodNum:"876",
        strategyId:"1234"
    },
]

/**
 * 
 * @param keyword 
 * @param gameNum 
 * @param strategyNum 
 * @param succeed 
 * @param failed 
 */
function searchApi(
    keyword:string,
    maxGameNum:number,
    strategyPageSize:number,
    succeed:(
        gameData:gameListItemI[],strategydata:strategyListItemI[]
    )=>void, 
    failed:(err:requestErrorI)=>void
){
    setTimeout(() => {
        const f = Math.random();
        if(f>0.1){
            const resGame = [...gameSourceData].splice(0,maxGameNum);
            const resStrategy = [...strategySourceData].splice(0,strategyPageSize);
            // 4个item------------------
            succeed(resGame,resStrategy)
        }else {
            const err:requestErrorI = {msg:"err",statusCode:"500"}
            failed(err);
        }
        
    }, 300);
}

function searchStrategyApi(
    keyword:string,
    page:number,
    size:number,
    succeed:(
        data:strategyListItemI[]
    )=>void, 
    failed:(err:requestErrorI)=>void
){
    setTimeout(() => {
        const f = Math.random();
        if(f>0.3){
            const data = [...strategySourceData].slice(page*size,(page+1)*size);
            succeed(data)
        }else {
            const err:requestErrorI = {msg:"err",statusCode:"500"}
            failed(err);
        }
        
    }, 300);
}

export {
    searchHotKeysApi,
    searchApi,
    searchStrategyApi
}