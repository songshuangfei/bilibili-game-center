import * as React from 'react';
import Banner from "src/compoments/commonComponent/banner";
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
            return
        }
        console.log("get home banner")
        const clitems:Array<{img:string,link:string}> = [
			{img:"http://192.168.1.101:8000/activityimg/1.jpg",link:"/game/001"},
			{img:"http://192.168.1.101:8000/activityimg/2.jpg",link:"1232323"},
			{img:"http://192.168.1.101:8000/activityimg/2.jpg",link:"12"}
        ];
        this.props.sethomeBanner(clitems);
    }

    public render(){
        return <Banner width="100%" height="32vw" items={this.props.items}/>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeBanner)
