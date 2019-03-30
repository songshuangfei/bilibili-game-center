
// banner item 类型
interface bannerItemI {
    imgSrc:string,
    link:string
}

// game icon item 类型
interface gameIconItemI {
    gameName:string,
    gameIconSrc:string,
    gameId:string
}

// home strategy item
interface homeStrategyItemI {
    coverImgSrc:string,
    look:number,
    good:number,
    summary:string,
    gameName:string,
    strategyId:number,
}

// -----------------------------开始时注意这里-IIIIIIIIIIIIIIIIII--------------------------------
// home order game item 
interface homeOrderGameItemI {
    coverImgSrc:string,
    orderedNum:number,
    gameName:string,
    gameId:string
}
