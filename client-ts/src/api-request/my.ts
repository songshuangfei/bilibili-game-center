function myUserInfo (succeed:(data:userPageInfoI)=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:userPageInfoI = {
            coverSrc:"//file.suafe.cn/blgc/userback/default.jpg",
            follower:21,
            following:56,
            goodNum:1423,
            headImgSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
            lv:5,
            sex:"female",
            uid:"2537832",
            userName:"夏池萤",
        }
        succeed(data)

    }, 1000);
}

function myMenuData (succeed:(data:myMenuDataI)=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:myMenuDataI = {
            bigGift:0,
            bookedGame:8,
            boughtGame:0,
            myCollect:0,
            myEvaluate:0,
            myGift:0,
            playedGame:1,
            updateNum:2,
        }
        succeed(data)

    }, 1000);
}

export {
    myUserInfo,
    myMenuData
}