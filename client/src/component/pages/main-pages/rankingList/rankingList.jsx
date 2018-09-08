import React,{ Component } from "react"
import GameList from "./gameList"
import "./style.less"


class RankingList extends Component {
    constructor(){
        super();
        var tab = window.appDataCache.rank.tab;
        this.state = {
            markLeft:tab?`${['BestSelling','GoodTrend','MorePraise','Hot'].indexOf(tab)*25}%`:'0%',
            tabNow:tab?tab:"BestSelling"
        }
        this.sortTypes=['BestSelling','GoodTrend','MorePraise','Hot'];
        this.touchTab = this.touchTab.bind(this);
    }
    
    touchTab(toTab){
        if(toTab === this.statetabNow){
            return;
        }
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        this.setState({
            markLeft:`${this.sortTypes.indexOf(toTab)*25}%`,
            tabNow:toTab
        })
    }

    componentDidMount(){
        var st = window.appDataCache.rank.st;
        if(st){
            document.documentElement.scrollTop = document.body.scrollTop = st//设置页面位置
        }

    }

    componentWillUnmount(){
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        window.appDataCache.rank.st = scrollTop;//保存页面位置
        document.documentElement.scrollTop = document.body.scrollTop = 0;//设置为0，防止切换到其他页面后不在顶端
        window.appDataCache.rank.tab = this.state.tabNow;
    }
    setTabStyle(tab){
        if(tab === this.state.tabNow){
            return {
                color:'#22ade5'
            }
        }
        return {
            color:'#424242'
        }
    }
    render(){
        return(
            <div className="rank">
                <GameList tab = {this.state.tabNow} />
                <div className="rank-type-tab">
                    <div className="tab" onTouchEnd={()=>this.touchTab('BestSelling')} style={this.setTabStyle('BestSelling')} >畅销榜</div>
                    <div className="tab" onTouchEnd={()=>this.touchTab('GoodTrend')} style={this.setTabStyle('GoodTrend')}>期待榜</div>
                    <div className="tab" onTouchEnd={()=>this.touchTab('MorePraise')} style={this.setTabStyle('MorePraise')}>口碑榜</div>
                    <div className="tab" onTouchEnd={()=>this.touchTab('Hot')} style={this.setTabStyle('Hot')}>上升最快</div>
                    <div className="mark" style={{left:this.state.markLeft}}></div>
                </div>
            </div>
        )
    }
}

export { RankingList }
