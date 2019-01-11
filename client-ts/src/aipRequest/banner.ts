import {setHomeBanner} from "src/action/actions"

const requestHomeBanner = (dispatch:any) => {
    return ()=>{
        const clitems:Array<{imgSrc:string,link:string}> = [
			{imgSrc:"http://192.168.1.101:8000/activityimg/1.jpg",link:"/game/001"},
			{imgSrc:"http://192.168.1.101:8000/activityimg/2.jpg",link:"1232323"},
			{imgSrc:"http://192.168.1.101:8000/activityimg/2.jpg",link:"12"}
        ];
        setTimeout(() => {
            dispatch(setHomeBanner(clitems))
        }, 3000);
    }
}

export {
    requestHomeBanner,
}