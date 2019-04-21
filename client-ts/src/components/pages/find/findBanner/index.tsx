import * as React from 'react';
import Banner from "src/components/commonComponent/banner";
import {setFindBanner} from "src/action/actions";
import {findBannerApi} from "src/api-request/find"
import { connect } from "react-redux";

class FindBanner extends React.Component {
    public props:{items:bannerItemI[], setFindBanner:(items:bannerItemI[])=>void}

    // public componentDidMount
    public componentDidMount(){
        if(this.props.items.length !== 0){
            return;
        }
        const that =this;
        findBannerApi(data=>{
            that.props.setFindBanner(data);
        })
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
