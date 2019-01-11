import * as React from 'react';
import HorizontalScroll from "src/compoments/commonComponent/horizontal-scroll";
import LinkTitle from "src/compoments/commonComponent/link-title";

class HotStrategy extends React.Component {
    public render(){
        return(
            <div>
				<LinkTitle title='热门攻略' link="/strategy" backgroundColor="none"/>
                <HorizontalScroll backgroundColor="none">
                    12                
                </HorizontalScroll>
            </div>
            
        )
    }
}

export default HotStrategy;
