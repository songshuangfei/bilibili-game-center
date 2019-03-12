import * as React from 'react';
import Banner from "src/components/commonComponent/banner";
import {setHomeBanner} from "src/action/actions";
import { connect } from 'react-redux';

const mapStateToProps = (state:any) => ({
    items: state.homeBanner
});
  
const mapDispatchToProps = (dispatch:any) => ({
    sethomeBanner: (items:any) => dispatch(setHomeBanner(items))
});

class HomeBanner extends React.Component {
    public props: {items:any,sethomeBanner:any};
    
    public componentDidMount(){
        if(this.props.items.length!==0){
            return;
        }
        console.log("get home banner")
        const clitems:Array<{imgSrc:string,link:string}> = [
			{imgSrc:"http://file.suafe.cn/blgc/activityimg/2.jpg",link:"/game/001"},
			{imgSrc:"http://file.suafe.cn/blgc/activityimg/1.jpg",link:"1232323"},
			{imgSrc:"http://file.suafe.cn/blgc/activityimg/3.jpg",link:"12"}
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
    mapStateToProps,
    mapDispatchToProps
)(HomeBanner)
