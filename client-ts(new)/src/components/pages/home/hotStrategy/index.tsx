import * as React from 'react';
import HorizontalScroll from "root/components/commonComponent/horizontal-scroll";
import LinkTitle from "root/components/commonComponent/link-title";

class HotStrategy extends React.Component {
    public render(){
        return(
            <div>
				<LinkTitle title='热门攻略' link="/strategy" backgroundColor="none"/>
                <HorizontalScroll backgroundColor="none">
                    21
                </HorizontalScroll>
            </div>
            
        )
    }
}

export default HotStrategy;
