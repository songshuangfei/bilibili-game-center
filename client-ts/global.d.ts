/**
 * banner item with http link 类型
 */
interface bannerItemI {
    imgSrc:string,
    link:string
}

interface bannerWithIdItemI {
    imgSrc:string,
    id:string
}

/**
 * game icon item 类型
 */
interface gameIconItemI {
    gameName:string,
    gameIconSrc:string,
    gameId:string
}

/**
 * home strategy item 类型
 */
interface homeStrategyItemI {
    coverImgSrc:string,
    look:number,
    good:number,
    summary:string,
    gameName:string,
    strategyId:string,
}

/**
 * home order game item 类型
 */
interface homeOrderGameItemI {
    coverImgSrc:string,
    orderedNum:number,
    gameName:string,
    gameId:string
}

/**
 * home activity  item 类型
 */
interface homeActivityItemI {
    coverSrc:string,
    gameIconSrc:string,
    gameName:string,
    activityIntro:string,
    gameScore:string,
    gameId:string
}


/**
 * banner item with id 类型
 */


interface findHotCommentItemI {
    commentId:string,
    commentAbstract:string,
    commenterHeadSrc:string,
    commenterName:string,
    commentStarNum:number,
    gameName:string,
    gameIconSrc:string,
}

interface FindGameClassifyItemI {
    classifyName:string,
    classifyId:string,
    games:gameIconItemI[]
}

interface userInfoBasicI {
    userName:string,
    uid:string,
    headImgSrc:string
}

interface userPageInfoI {
    coverSrc:string,
    follower:number,
    following:number,
    goodNum:number,
    headImgSrc:string,
    lv:number,
    sex:string,
    uid:string,
    userName:string,
}

interface myMenuDataI {
    bigGift:number,
    bookedGame:number,
    boughtGame:number,
    myCollect:number,
    myEvaluate:number,
    myGift:number,
    playedGame:number,
    updateNum:number,    
}

interface homeActivityItmeI {
    
}