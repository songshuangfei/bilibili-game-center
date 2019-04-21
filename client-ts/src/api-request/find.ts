function findBannerApi (succeed:(data:bannerItemI[])=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:bannerItemI[] = [
            {imgSrc:"//file.suafe.cn/blgc/activityimg/1.jpg",link:"1232323"},
            {imgSrc:"//file.suafe.cn/blgc/activityimg/2.jpg",link:"/game/001"},
            {imgSrc:"//file.suafe.cn/blgc/activityimg/3.jpg",link:"12"}
        ];
        succeed(data)
    }, 1200);
}

function findOrderNewGameApi (succeed:(data:gameIconItemI[])=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:gameIconItemI[] = [
            {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
            {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
            {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
            {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
            {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
            {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
        ]
        succeed(data)
    }, 1500);
}

function findSpecialsApi (succeed:(data:bannerWithIdItemI[])=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:bannerWithIdItemI[] = [
            {imgSrc:"//file.suafe.cn/blgc/gamecover/3.jpg",id:"001"},
            {imgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",id:"003"},
            {imgSrc:"//file.suafe.cn/blgc/gamecover/4.jpg",id:"004"},
            {imgSrc:"//file.suafe.cn/blgc/gamecover/2.jpg",id:"005"},
            {imgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",id:"006"},
        ]
        succeed(data)
    }, 1500);
}

function findBiliGamesApi (succeed:(data:gameIconItemI[])=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:gameIconItemI[] = [
            {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
            {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
            {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
            {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
            {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
            {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
        ]
        succeed(data)
    }, 2000);
}

function findPayGamesApi (succeed:(data:gameIconItemI[])=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:gameIconItemI[] = [
            {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
            {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
            {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
            {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
            {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
            {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
            {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
        ]
        succeed(data)
    }, 2000);
}

function findHotCommentsApi (succeed:(data:findHotCommentItemI[])=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:findHotCommentItemI[] =[
            {
                gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",
                commentAbstract:"这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要这是一条评论的摘要，这是一条评论的摘要",
                commentId:"001",
                commentStarNum:5,
                commenterHeadSrc:"//file.suafe.cn/blgc/userhead/1.jpg",
                commenterName:"夏池萤",
                gameName:"崩坏三"
            },{
                commentAbstract:"这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要",
                commentId:"002",
                commentStarNum:5,
                commenterHeadSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
                commenterName:"跨越时空的思念",
                gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",
                gameName:"FGO"
            },{
                commentAbstract:"这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要",
                commentId:"003",
                commentStarNum:3,
                commenterHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
                commenterName:"子欲何",
                gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",
                gameName:"梦幻模拟战"
            },{
                commentAbstract:"这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要，这是一条评论的摘要",
                commentId:"004",
                commentStarNum:3,
                commenterHeadSrc:"//file.suafe.cn/blgc/userhead/3.jpg",
                commenterName:"子欲何",
                gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",
                gameName:"梦幻模拟战"
            },
        ]
        succeed(data)
    }, 2000);
}


function findGameClassifyApi (page:number,size:number,succeed:(data:findGameClassifyItemI[])=>void, failed:(err:requestErrorI)=>void) {
    const dataSource:findGameClassifyItemI[] = [
        {
            classifyName:"独立游戏",
            classifyId:"002",
            games:[
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            ]   
        },{
            classifyName:"音乐游戏",
            classifyId:"001",
            games:[
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            ]   
        },{
            classifyName:"休闲~冒险",
            classifyId:"003",
            games:[
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            ]   
        },{
            classifyName:"独立游戏",
            classifyId:"0021",
            games:[
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            ]   
        },{
            classifyName:"音乐游戏",
            classifyId:"0011",
            games:[
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            ]   
        },{
            classifyName:"休闲~冒险",
            classifyId:"0031",
            games:[
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            ]   
        }, {
            classifyName:"独立游戏",
            classifyId:"0023",
            games:[
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            ]   
        },{
            classifyName:"音乐游戏",
            classifyId:"0013",
            games:[
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            ]   
        },{
            classifyName:"休闲~冒险",
            classifyId:"0033",
            games:[
                {gameName:"辐射：避难所Online",gameIconSrc:"//file.suafe.cn/blgc/gameicon//fs.png",gameId:"007"},
                {gameName:"食梦计划",gameIconSrc:"//file.suafe.cn/blgc/gameicon//smjh.png",gameId:"005"},
                {gameName:"站双：帕弥什",gameIconSrc:"//file.suafe.cn/blgc/gameicon//zs.png",gameId:"006"},
                {gameName:"命运-冠位指定",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameId:"001"},
                {gameName:"碧蓝航线",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameId:"003"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"009"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"008"},
                {gameName:"崩坏3",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameId:"002"},
                {gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon//mhmnz.png",gameId:"004"},
            ]   
        }
    ];
    setTimeout(() => {
        const f = Math.random();
        if(f>0.2){
        // succeed
            const data = dataSource.slice(page*size,(page+1)*size);
            succeed(data)
        }else{
        // failed
            const err:requestErrorI ={statusCode:"500",msg:"err"}
            failed(err);
        }
    }, 1000);
}

export {
    findBannerApi,
    findOrderNewGameApi,
    findSpecialsApi,
    findBiliGamesApi,
    findPayGamesApi,
    findHotCommentsApi,
    findGameClassifyApi,
}