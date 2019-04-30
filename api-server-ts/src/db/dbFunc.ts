import DB from "./DB";

/**
 * 
 * @param rawRows 
 * @param cols 
 * 过滤rawRows中除cols中键值的所有属性
 */
function colFilter(rawRows:any[],cols:string[]):any[]{
    let result = [];
    for (const r of rawRows) {
        const filteredRow:any = {};
        for(let key of cols){
            filteredRow[key] = r[key];
        }
        result.push(filteredRow);
    }
    return result;
}

// -----------------------------------------------------------------------------------
/**
 * 
 * @param page 
 * @param size 
 * @param cols 
 * 返回一个按热度排序的游戏列表分页 
 */
async function hotGameListPaging (page:number, size:number, cols:string[]){
    let db = new DB();
    let rows = await db.useTable("publishedGames").result();
    rows.sort((a, b)=>{
        return b.hotIndex -  a.hotIndex ;
    });

    let result = colFilter(rows,cols);
    return result.slice((page-1)*size,page*size);
}

/**
 * 
 * @param page 
 * @param size 
 * @param cols 
 * 返回一个按分数排序的游戏列表分页 
 */
async function goodGameListPaging (page:number, size:number, cols:string[]){
    let db = new DB();
    let rows = await db.useTable("publishedGames").result();
    rows.sort((a, b)=>{
        return b.score -  a.score ;
    });

    let result = colFilter(rows,cols);
    return result.slice((page-1)*size,page*size);
}


/**
 * 
 * @param page 
 * @param size 
 * @param cols 
 * 返回一个按发布时间排序的游戏列表分页 
 */
async function newGameListPaging (page:number, size:number, cols:string[]){
    let db = new DB();
    let rows = await db.useTable("publishedGames").result();
    rows.sort((a, b)=>{
        const d1 = new Date(a.publishDate);
        const d2 = new Date(b.publishDate);
        if(d1 > d2){
            return -1;
        }else{
            return 1;
        }
    });
    let result = colFilter(rows,cols);
    return result.slice((page-1)*size,page*size);
}

/**
 * 
 * @param page 
 * @param size 
 * @param cols 
 * 返回一个按预约人数排序的游戏列表分页 
 */
async function expectGameListPaging (page:number, size:number, cols:string[]){
    let db = new DB();
    let rows = await db.useTable("unpublishedGames").result();
    rows.sort((a, b)=>{
        return b.orderNum - a.orderNum;
    });
    let result = colFilter(rows,cols);
    return result.slice((page-1)*size,page*size);
}

// -----------------------------------------------------------------------------------
/**
 * 
 * @param actRawRows 
 * 返回完整的游戏活动数据列表
 */
async function activityDataMerge (actRawRows:any[],withTime?:boolean){
    let filteredRow = colFilter(actRawRows, ["activityId","coverSrc","activityIntro",withTime?"publishDate":""]);
    let result:any[] = [];
    for (const kv of actRawRows.entries()) {
        let db = new DB();
        let gameRows = await db.useTable("publishedGames").select("gameIconSrc","gameName","score").where("gameId",kv[1].gameId).result();
        result.push({
            ...filteredRow[kv[0]],
            ...gameRows[0]
        })
    };
    return result;
}

/**
 * 返回最新的一个游戏活动
 */
async function gameActivityNewestone (){
    let db = new DB();
    // 获取活动数据
    let actRows = await db.useTable("gameActivities").result();
    actRows.sort((a, b)=>{
        const d1 = new Date(a.publishDate);
        const d2 = new Date(b.publishDate);
        if(d1 > d2){
            return -1;
        }else{
            return 1;
        }
    });
    //获取外键数据
    let mergedDataRows = await activityDataMerge(actRows);
    // 拼接数据
    return mergedDataRows[0];
}

/**
 * 
 * @param page 
 * @param size 
 * @param withTime 测试参数
 * 返回按时间排序（最新）的一个活动列表分页
 */
async function gameActivityPrev(page:number, size:number,withTime?:boolean){
    let db = new DB();
    // 获取活动数据
    let actRows = await db.useTable("gameActivities").result();
    actRows.sort((a, b)=>{
        const d1 = new Date(a.publishDate);
        const d2 = new Date(b.publishDate);
        if(d1 > d2){
            return -1;
        }else{
            return 1;
        }
    });
    //获取外键数据
    let mergedDataRows = await activityDataMerge(actRows,withTime);
    
    // 去除最新的一个
    let prevactRows = mergedDataRows.slice(1);
    return prevactRows.slice((page-1)*size,page*size);
}

// -----------------------------------------------------------------------------------
async function strategyDataMerge(strategyRows:any[],withTime?:boolean) {
    let filteredRow = colFilter(strategyRows, ["strategyId","strategyTitle","coverSrc","abstract","strategyType","readNum","goodNum",withTime?"publishDate":""]);
    let result:any[] = [];
    for (const kv of strategyRows.entries()) {
        let db1 = new DB(),
            db2 = new DB();
        let gameRows = await db1.useTable("publishedGames").select("gameName").where("gameId",kv[1].gameId).result();
        let userRows = await db2.useTable("users").select("userName","headPicSrc").where("uid",kv[1].publisherId).result();
        result.push({
            ...filteredRow[kv[0]],
            ...gameRows[0],
            publisherName:userRows[0].userName,
            publisherHeadSrc:userRows[0].headPicSrc,
        })
    };
    return result;
}
/**
 * 
 * @param page 
 * @param size 
 * @param withTime 一个用于测试的参数
 * @returns 
 * 返回一个最新攻略列表分页
 * 
 */
async function strategyNewestList(page:number, size:number,withTime?:boolean){
    let db = new DB();
    // 获取活动数据
    let strategyRows = await db.useTable("strategys").result();
    strategyRows.sort((a, b)=>{
        const d1 = new Date(a.publishDate);
        const d2 = new Date(b.publishDate);
        if(d1 > d2){
            return -1;
        }else{
            return 1;
        }
    });

    //获取外键数据
    let mergedDataRows = await strategyDataMerge(strategyRows,withTime);
    return mergedDataRows.slice((page-1)*size,page*size);
}

export {
    hotGameListPaging,
    goodGameListPaging,
    newGameListPaging,
    expectGameListPaging,
    gameActivityNewestone,
    gameActivityPrev,
    strategyNewestList
}