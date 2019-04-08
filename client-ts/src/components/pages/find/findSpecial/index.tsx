import * as React from 'react';
import LinkTitle from "src/components/commonComponent/link-title";
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
// import {Link} from "react-router-dom";
import {ImgLoadingIcon} from "src/components/icons";
import "./find-special.css";
import ImgOnlineSrc from 'src/components/commonComponent/img-online-src';
import {connect} from "react-redux";
import { setFindSpecial } from "src/action/actions"
import { Link } from 'react-router-dom';

const SpecialItem = (props:bannerWithIdItemI)=>{
    return(
        <li className="special-item">
            <div className="cover" style={{backgroundImage:`url(${ImgLoadingIcon})`}}>
                <ImgOnlineSrc src={props.imgSrc} alt=""/>
                <Link to={props.id === ""?"#":`/special?id=${props.id}`}/>
            </div>
        </li>
    )
}
class FindSpecials extends React.Component {
    public props:{items:bannerWithIdItemI[], setFindSpecial:(items:bannerWithIdItemI[])=>void}

    public componentDidMount(){
        if(this.props.items.length !== 0){
            return;
        }
        // console.log("get home find special")

        const that =this;
        setTimeout(() => {
            const specials:bannerWithIdItemI[] = [
                {imgSrc:"//file.suafe.cn/blgc/gamecover/3.jpg",id:"001"},
                {imgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",id:"003"},
                {imgSrc:"//file.suafe.cn/blgc/gamecover/4.jpg",id:"004"},
                {imgSrc:"//file.suafe.cn/blgc/gamecover/2.jpg",id:"005"},
                {imgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",id:"006"},
            ]
            that.props.setFindSpecial(specials);
        }, 3000);
    }

    public render(){
        return(
            <div className="find-specials">
                <LinkTitle title="精选专题" link="specials" backgroundColor="none"/>
                <HorizontalScroll backgroundColor="none">
                    {
                        this.props.items.length === 0?
                        [1,2,3,4,5,6].map(v=>(
                            <SpecialItem key={v} imgSrc="" id=""/>
                        )):
                        this.props.items.map(v=>(
                            <SpecialItem key={v.id} imgSrc={v.imgSrc} id={v.id}/>
                        ))
                    }
                    
                </HorizontalScroll>
            </div>
        )
    }
}

export default connect(
    (state:any) => ({
        items: state.findSpecial
    }),(dispatch:any) => ({
        setFindSpecial: (items:bannerWithIdItemI[]) => dispatch(setFindSpecial(items))
    })
)(FindSpecials)
