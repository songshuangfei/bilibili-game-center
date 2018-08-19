import React,{ Component } from "react"
import "./style.less"

class RankingList extends Component {
    render(){
        return(
            <div className="rank">
                <div className="rank-type-tab">
                    <div className="tab">畅销榜</div>
                    <div className="tab">期待帮</div>
                    <div className="tab">口碑榜</div>
                    <div className="tab">上升最快</div>
                </div>
                <div className="list">1</div>
            </div>
        )
    }
}

export { RankingList }