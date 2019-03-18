import * as React from 'react';
import Banner from "src/components/commonComponent/banner";

class FindBanner extends React.Component {
    public render(){
        const clitems:Array<{imgSrc:string,link:string}> = [
			{imgSrc:"//file.suafe.cn/blgc/activityimg/2.jpg",link:"/game/001"},
			{imgSrc:"//file.suafe.cn/blgc/activityimg/1.jpg",link:"1232323"},
			{imgSrc:"//file.suafe.cn/blgc/activityimg/3.jpg",link:"12"}
        ];
        return <Banner width="100%" height="32vw" items={clitems}/>
    }
}

export default FindBanner;
