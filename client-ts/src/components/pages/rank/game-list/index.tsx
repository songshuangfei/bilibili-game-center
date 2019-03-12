import * as React from 'react';
import "./rank-game-list.css";

class GameList extends React.Component {
    public props:{listType:string};
    public render(){
        return (
            <div className="rank-game-list">
                gamelist for {this.props.listType}
            </div>
        )
    }
} 

export default GameList;