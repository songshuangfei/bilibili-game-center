const normalGameDataSource:gameListItemI[]=[
    {gameId:"002",gameName:"崩坏三",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"ARPG",gameSize:"568M",score:4.1},
    {gameId:"009",gameName:"这是个啥游戏。。。",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",score:9.1},
    {gameId:"001",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",score:0.1},
    {gameId:"003",gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"004",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"005",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"006",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"007",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"008",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"0021",gameName:"崩坏三",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"ARPG",gameSize:"568M",score:4.1},
    {gameId:"0091",gameName:"这是个啥游戏。。。",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",score:9.1},
    {gameId:"0012",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",score:0.1},
    {gameId:"0031",gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"0041",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"0051",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"0061",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"0071",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"0081",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"0022",gameName:"崩坏三",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"ARPG",gameSize:"568M",score:4.1},
    {gameId:"0092",gameName:"这是个啥游戏。。。",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",score:9.1},
    {gameId:"0012aa",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",score:0.1},
    {gameId:"0032",gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"0042",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"0052",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"0062",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"0072",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",score:6.1},
    {gameId:"0082",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"卡牌",gameSize:"568M",score:6.1},
]

// 假装排序
const sort = {
    hotFirst(datasorce:gameListItemI[]){
        return datasorce
    },
    goodFirst(datasorce:gameListItemI[]){
        const sorted = [...datasorce]
        return sorted.reverse()
    },
    newFirst(datasorce:gameListItemI[]){
        const src = [...datasorce]
        const res  = [...src.slice(12,src.length), ...src.slice(0,12)]
        return res
    },
}

enum rankApiTypes {
    hot,
    new,
    good,
}

/**
 * 
 * @param rankType ran list 类型
 * @param page 
 * @param size 
 * @param succeed 
 * @param failed 
 */
function gameRankApi (type:rankApiTypes,page:number,size:number,succeed:(data:gameListItemI[])=>void, failed:(err:requestErrorI)=>void) {
    let sortedData:gameListItemI[]=[];
    switch(type){
    case rankApiTypes.hot:
        sortedData = sort.hotFirst(normalGameDataSource);
        break;
    case rankApiTypes.new:
        sortedData = sort.newFirst(normalGameDataSource);
        break;
    case rankApiTypes.good:
        sortedData = sort.goodFirst(normalGameDataSource);
        break;
    }

    setTimeout(() => {
        const f = Math.random();
        if(f>0.2){
            // 模拟成功
            const resData = sortedData.slice(page*size,(page+1)*size);
            // 数据不足返回不足page的数组，无数据返回空数组
            succeed(resData)
        }else{
            // 模拟失败
            const err:requestErrorI ={statusCode:"500",msg:"err"}
            failed(err);
        }
    }, 300);
}

// new game rank api
const newGameDataSource:newGameListItemI[]=[
    {gameId:"0011",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",orderNum:12213},
                    {gameId:"0051",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:32431},
                    {gameId:"0031",gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",gameType:"卡牌",gameSize:"568M",orderNum:6465},
                    {gameId:"0021",gameName:"崩坏三",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"ARPG",gameSize:"568M",orderNum:4456456},
                    {gameId:"0091",gameName:"这是个啥游戏。。。",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:56456},
                    {gameId:"0041",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
                    {gameId:"0061",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:46456},
                    {gameId:"0071",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
                    {gameId:"0081",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"卡牌",gameSize:"568M",orderNum:345345},
                    {gameId:"0012",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",orderNum:12213},
                    {gameId:"0052",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:32431},
                    {gameId:"0032",gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",gameType:"卡牌",gameSize:"568M",orderNum:6465},
                    {gameId:"0022",gameName:"崩坏三",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"ARPG",gameSize:"568M",orderNum:4456456},
                    {gameId:"0092",gameName:"这是个啥游戏。。。",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:56456},
                    {gameId:"0042",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
                    {gameId:"0062",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:46456},
                    {gameId:"0072",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
                    {gameId:"0082",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"卡牌",gameSize:"568M",orderNum:345345},
                    {gameId:"0013",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",orderNum:12213},
                    {gameId:"0053",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:32431},
                    {gameId:"0033",gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",gameType:"卡牌",gameSize:"568M",orderNum:6465},
                    {gameId:"0023",gameName:"崩坏三",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"ARPG",gameSize:"568M",orderNum:4456456},
                    {gameId:"0093",gameName:"这是个啥游戏。。。",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:56456},
                    {gameId:"0043",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
                    {gameId:"0063",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:46456},
                    {gameId:"0073",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
                    {gameId:"0083",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"卡牌",gameSize:"568M",orderNum:345345},
]

function newGameRankApi (page:number,size:number,succeed:(data:newGameListItemI[])=>void, failed:(err:requestErrorI)=>void) {
    setTimeout(() => {
        const f = Math.random();
        if(f>0.2){
            // 模拟成功
            const resData = newGameDataSource.slice(page*size,(page+1)*size);
            // 数据不足返回不足page的数组，无数据返回空数组
            succeed(resData)
        }else{
            // 模拟失败
            const err:requestErrorI ={statusCode:"500",msg:"err"}
            failed(err);
        }
    }, 300);
}


export {
    gameRankApi,
    rankApiTypes,
    newGameRankApi
}