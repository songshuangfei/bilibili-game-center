import React from 'react';
import HorizontalScroll from "root/components/commonComponent/horizontal-scroll/index";
import LinkTitle from "root/components/commonComponent/link-title";

const HotStrategy = () => {
    return(
        <div>
            <LinkTitle title='热门攻略' link="/strategy" backgroundColor="none"/>
            <HorizontalScroll backgroundColor="none">
                21
            </HorizontalScroll>
        </div>
        
    )
}

export default HotStrategy;
