// common interfact
/**
 * banner item with http link 类型
 */
interface requestErrorI {
    statusCode:string,
    msg:string
}

interface bannerItemI {
    imgSrc:string,
    link:string
}

interface bannerWithIdItemI {
    imgSrc:string,
    id:string
}

interface userInfoBasicI {
    userName:string,
    uid:string,
    headImgSrc:string
}

interface pageTabIndexI {
    tabIndex:number
}

interface listRequestIiemI {
    // just empty(any)
}

interface gameListItemI {
    gameId:string,
    gameName:string,
    gameIconSrc:string,
    gameType:string,
    gameSize:string,
    score?:number,
    orderNum?:number
}
/**
 * game icon item 类型
 */
interface gameIconItemI {
    gameName:string,
    gameIconSrc:string,
    gameId:string
}

interface strategyListItemI {
    publisherHeadSrc:string,
    publisherName:string,
    strategyTitle:string,
    coverSrc:string,
    abstract:string,
    gameName:string,
    strategyType:string,
    readNum:string,
    goodNum:string,
    strategyId:string
}

// interface of home page
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
    activityId:string,
    coverSrc:string,
    gameIconSrc:string,
    gameName:string,
    activityIntro:string,
    gameScore:string,
    gameId:string
}

// interface of find page

/**
 * find hot comment 
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

interface findGameClassifyItemI {
    classifyName:string,
    classifyId:string,
    games:gameIconItemI[]
}


// interface of user page
/**
 * user info 
 */
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

/**
 * interface of my page menu 
 */
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

interface msgItemI {
    senderName:string,
    senderHeadsrc:string,
    sendTime:string,
    msgContent:string
}


