import * as React from "react";
import {Link} from "react-router-dom"

class NotFound extends React.Component {
    public render(){
        return(
            <div>
                该页面不存在
                <br/>
                <Link to="/">返回主页</Link>
            </div>
        )
    }
}

export default NotFound;