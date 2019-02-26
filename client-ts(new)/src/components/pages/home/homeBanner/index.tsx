import React from 'react';
import Banner from "root/components/commonComponent/banner";

class HomeBanner extends React.Component {
    public render(){
        const clitems:Array<{imgSrc:string,link:string}> = [
			{imgSrc:"http://192.168.1.101:8000/activityimg/2.jpg",link:"/game/001"},
			{imgSrc:"http://192.168.1.101:8000/activityimg/1.jpg",link:"1232323"},
			{imgSrc:"http://192.168.1.101:8000/activityimg/3.jpg",link:"12"}
        ];
        return <Banner width="100%" height="32vw" items={clitems}/>
    }
}

export default HomeBanner;

