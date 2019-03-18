import * as React from "react";
import LinkTitle from "src/components/commonComponent/link-title";
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";


class HotComments extends React.Component {
    public render(){
        return(
            <div className="find-hot-comment">
                <LinkTitle title="热门评论" link="/hotcomment" backgroundColor="none"/>
                <HorizontalScroll backgroundColor="none">12312323123</HorizontalScroll>
            </div>
        )
    }
}

export default HotComments;