function msgApi (succeed:(data:msgsI)=>void) {
    setTimeout(() => {
        const data1:msgItemI[]=[{
                senderName:"nem",
                senderHeadsrc:"//file.suafe.cn/blgc/userhead/6.jpg",
                sendTime:"4-12",
                msgContent:"hello!hello?",
                senderId:"0211"
            },{
                senderName:"emm",
                senderHeadsrc:"//file.suafe.cn/blgc/userhead/5.jpg",
                sendTime:"4-11",
                msgContent:"Hi!",
                senderId:"2101"
            },{
                senderName:"archer",
                senderHeadsrc:"//file.suafe.cn/blgc/userhead/4.jpg",
                sendTime:"4-11",
                msgContent:"Hi!",
                senderId:"04211"
            },
                {senderName:"saber",
                senderHeadsrc:"//file.suafe.cn/blgc/userhead/3.jpg",
                sendTime:"4-11",
                msgContent:"Hi!",
                senderId:"012"
            },
        ]
        const data2:msgItemI[]=[]
        const data3:msgItemI[]=[]
        const data:msgsI={
            reply:data1,
            attitude:data2,
            inform:data3
        }
        succeed(data)
    }, 500);
}

export {
    msgApi
}