/**
 * banner item 类型
 */
interface bannerItemI {
    imgSrc:string,
    link:string
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
