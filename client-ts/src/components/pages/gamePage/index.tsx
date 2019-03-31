import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryParse from "src/components/commonFunc/queryParse";

class GamePage extends React.Component {
    public props: RouteComponentProps;
    public render(){
        const result = queryParse(this.props.location.search,"id");
        return(
            <div>
                gameid:
                {
                    result.isFound?result.value:"none"
                }
            </div>
        )
    }
}

export default GamePage;