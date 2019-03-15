import * as React from 'react';
import LinkTitle from "src/components/commonComponent/link-title";
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import {Link} from "react-router-dom";
import "./find-special.css";

const SpecialItem = (props:{coverImgSrc:string,specialId:string})=>{
    return(
        <li className="special-item">
            <div className="cover">
                <img src={props.coverImgSrc} alt=""/>
                <Link to={`/special/${props.specialId}`} />
            </div>
        </li>
    )
}
class FindSpecials extends React.Component {
    public render(){

        const specials = [
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/3.jpg",specialId:"001"},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",specialId:"003"},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/4.jpg",specialId:"004"},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/2.jpg",specialId:"005"},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",specialId:"006"},
        ]
        return(
            <div className="find-specials">
                <LinkTitle title="精选专题" link="specials" backgroundColor="none"/>
                <HorizontalScroll backgroundColor="none">
                    {
                        specials.map(v=>(
                            <SpecialItem key={v.specialId} coverImgSrc={v.coverImgSrc} specialId={v.specialId}/>
                        ))
                    }
                </HorizontalScroll>
            </div>
        )
    }
}

export default FindSpecials;