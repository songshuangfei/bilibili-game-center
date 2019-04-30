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
async function activityDataMerge (actRawRows:any[]){
    let filteredRow = colFilter(actRawRows, ["activityId","coverSrc","activityIntro"]);
    let result:any[] = [];
    for (const kv of actRawRows.entries()) {
        let db = new DB();
        let gameRows = await db.useTable("publishedGames").select("gameId","gameIconSrc","gameName","score").where("gameId",kv[1].gameId).result();
        result.push({
            ...filteredRow[kv[0]],
            gameId:gameRows[0].gameId,
            gameName:gameRows[0].gameName,
            gameIconSrc:gameRows[0].gameIconSrc,
            gameScore:gameRows[0].score
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
 * 返回按时间排序（最新）的一个活动列表分页
 */
async function gameActivityPrev(page:number, size:number){
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
    
    // 去除最新的一个
    let prevactRows = mergedDataRows.slice(1);
    return prevactRows.slice((page-1)*size,page*size);
}

// -----------------------------------------------------------------------------------
async function strategyDataMerge(strategyRows:any[]) {
    let filteredRow = colFilter(strategyRows, ["strategyId","strategyTitle","coverSrc","abstract","strategyType","readNum","goodNum","gameId"]);
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
 * @returns 
 * 返回一个最新攻略列表分页
 * 
 */
async function strategyNewestList(page:number, size:number){
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
    let mergedDataRows = await strategyDataMerge(strategyRows);
    return mergedDataRows.slice((page-1)*size,page*size);
}


//---------------------------------------------------------------------------
async function commentDataMearge(commentRows:any[]){
    let filteredRow = colFilter(commentRows, ["commentId","commentAbstract","commentStarNum"]);
    let result:any[]=[];
    for (const kv of commentRows.entries()) {
        let db1 = new DB(),
            db2 = new DB();
        let gameRows = await db1.useTable("publishedGames").select("gameIconSrc","gameName").where("gameId",kv[1].gameId).result();
        let userRows = await db2.useTable("users").select("userName","headPicSrc").where("uid",kv[1].publisherId).result();
        result.push({
            ...filteredRow[kv[0]],
            gameIconSrc:gameRows[0].gameIconSrc,
            gameName:gameRows[0].gameName,
            commenterHeadSrc:userRows[0].headPicSrc,
            commenterName:userRows[0].userName,
        })
    }
    return result;
}

/**
 * 
 * @param page 
 * @param size 
 * 返回最热评论的列表分页
 */
async function hotCommentPaging(page:number, size:number){
    let db = new DB();
    // 获取活动数据
    let commentRows = await db.useTable("comment").result();
    commentRows.sort((a, b)=>{
        return b.hotIndex - a.hotIndex;
    });
    //获取外键数据
    let mergedDataRows = await commentDataMearge(commentRows);
    return mergedDataRows.slice((page-1)*size,page*size);
}
//----------------------------------------------------------------
async function gameClassifyDataMerge(classIfyRows:any){
    let filteredRow = colFilter(classIfyRows, ["classifyName","classifyId"]);
    let result:any[]=[];
    for (const kv of classIfyRows.entries()) {
        // 获取每个分类里的游戏
        let games:any=[];
        for (const id of kv[1].gamesId) {
            let db = new DB();
            let gameRows = await db.useTable("publishedGames").select("gameIconSrc","gameName","gameId").where("gameId",id).result();
            games.push(gameRows[0]);
        }
        result.push({
            ...filteredRow[kv[0]],
            games:games
        })
    }
    return result;
}
/**
 * 
 * @param page 
 * @param size 
 * 返回游戏分类的列表分页
 */
async function gameClassifypaging(page:number, size:number){
    let db = new DB();
    // 获取活动数据
    let classIfyRows = await db.useTable("gameClassify").result();
    let mergedDataRows = await gameClassifyDataMerge(classIfyRows);

    //获取外键数据
    return mergedDataRows.slice((page-1)*size,page*size);
}


/**
 * 
 * @param keyword 
 * @param actnum 
 * 第一搜索结果
 */
async function search(keyword:string,actnum:number){
    let db = new DB();
    // 获取活动数据
    let gameRows = await db.useTable("publishedGames").select(
        "gameId","gameName","gameIconSrc","gameType","gameSize","score",
    ).result();
    let gameResult:any[]=[];
    let gamesId:string[]=[];

    for (const row of gameRows) {
        if(row.gameName.indexOf(keyword)!==-1){
            gameResult.push(row);
            gamesId.push(row.gameId);
        }
    };

    let db2 = new DB();
    let strategyRows = await db2.useTable("strategys").select().result();
    let mergedData = await strategyDataMerge(strategyRows);

    let strategyResult:any[]=[];
    for (const row of mergedData) {
        for (const id of gamesId) {
            if(row.gameId === id ){
                strategyResult.push(row);
                break;
            }
        }
    }

    //获取外键数据
    return {
        games:gameResult,
        strategies:strategyResult.slice(0,actnum)
    }
}



async function strategySearchList(keyword:string,page:number,size:number){
    let db = new DB();
    // 获取活动数据
    let gameRows = await db.useTable("publishedGames").select("gameName","gameId").result();
    let gamesId:string[]=[];

    for (const row of gameRows) {
        if(row.gameName.indexOf(keyword)!==-1){
            gamesId.push(row.gameId);
        }
    };

    let db2 = new DB();
    let strategyRows = await db2.useTable("strategys").select().result();
    let mergedData = await strategyDataMerge(strategyRows);

    let activityResult:any[]=[];
    for (const row of mergedData) {
        for (const id of gamesId) {
            if(row.gameId === id ){
                activityResult.push(row);
                break;
            }
        }
    }
    //获取外键数据
    return activityResult.slice((page-1)*size,page*size);
}


export {
    hotGameListPaging,
    goodGameListPaging,
    newGameListPaging,
    expectGameListPaging,
    gameActivityNewestone,
    gameActivityPrev,
    strategyNewestList,
    hotCommentPaging,
    gameClassifypaging,
    search,
    strategySearchList
}