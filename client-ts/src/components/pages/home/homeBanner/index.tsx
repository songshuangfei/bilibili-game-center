import * as React from 'react';
import Banner from "src/components/commonComponent/banner";
import {setHomeBanner} from "src/action/actions";
import { connect } from 'react-redux';
import { homeBannerApi } from "src/api-request/home"

class HomeBanner extends React.Component {
    public props: {items:bannerItemI[],sethomeBanner:(items:bannerItemI[]) =>any};
    
    public componentDidMount(){
        if(this.props.items.length!==0){
            return;
        }
        const that =this;
        homeBannerApi((data)=>{
            that.props.sethomeBanner(data);
        });
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
