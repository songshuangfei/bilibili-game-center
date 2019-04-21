import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryParse from "src/components/commonFunc/queryParse";
import "./game-page.css"

class GamePage extends React.Component {
    public props: RouteComponentProps;
    public render(){
        const result = queryParse(this.props.location.search,"id");
        return(
            <div className="game-page">
                <p className="game-id">
                    GamePage with id :
                    {result.isFound?result.value:"none"}
                </p>
                <p className="info">
                    有空做做把～(￣▽￣～)
                </p>
                <div className="back-btn" onClick={this.props.history.goBack}>
                    返回
                </div>
                
            </div>
        )
    }
}

export default GamePage;