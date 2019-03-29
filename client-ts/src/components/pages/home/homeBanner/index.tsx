import * as React from 'react';
import Banner from "src/components/commonComponent/banner";
import {setHomeBanner} from "src/action/actions";
import { connect } from 'react-redux';

class HomeBanner extends React.Component {
    public props: {items:bannerItemI[],sethomeBanner:(items:bannerItemI[]) =>any};
    
    public componentDidMount(){
        if(this.props.items.length!==0){
            return;
        }
        console.log("get home banner");
        const clitems:bannerItemI[] = [
			{imgSrc:"//file.suafe.cn/blgc/activityimg/2.jpg",link:"/game/001"},
			{imgSrc:"//file.suafe.cn/blgc/activityimg/1.jpg",link:"1232323"},
			{imgSrc:"//file.suafe.cn/blgc/activityimg/3.jpg",link:"12"}
        ];
        const that =this;
        setTimeout(() => {
            that.props.sethomeBanner(clitems);
        }, 3000);
    }

    public render(){
        return <Banner width="100%" height="32vw" items={this.props.items}/>
    }
}

export default connect(
    (state:any) => ({
        items: state.homeBanner
    }),(dispatch:any) => ({
        sethomeBanner: (items:bannerItemI[]) => dispatch(setHomeBanner(items))
    })
)(HomeBanner)
