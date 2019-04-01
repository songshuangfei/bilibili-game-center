import * as React from 'react';
import Banner from "src/components/commonComponent/banner";
import {setFindBanner} from "src/action/actions"
import { connect } from "react-redux"

class FindBanner extends React.Component {
    public props:{items:bannerItemI[], setFindBanner:(items:bannerItemI[])=>void}

    // public componentDidMount
    public componentDidMount(){
        if(this.props.items.length !== 0){
            return;
        }
        console.log("get home find banner")

        const that =this;
        setTimeout(() => {
            const clitems:bannerItemI[] = [
                {imgSrc:"//file.suafe.cn/blgc/activityimg/1.jpg",link:"1232323"},
                {imgSrc:"//file.suafe.cn/blgc/activityimg/2.jpg",link:"/game/001"},
                {imgSrc:"//file.suafe.cn/blgc/activityimg/3.jpg",link:"12"}
            ];
            that.props.setFindBanner(clitems);
        }, 3000);
    }
    public render(){
        return <Banner width="100%" height="32vw" items={this.props.items}/>
    }
}

export default connect(
    (state:any) => ({
        items: state.findBanner
    }),(dispatch:any) => ({
        setFindBanner: (items:bannerItemI[]) => dispatch(setFindBanner(items))
    })
)(FindBanner)
