import * as React from 'react';
import GameListItem from "src/components/commonComponent/game-list-item";
import AutoLoadList from "src/components/commonComponent/auto-load-list";
import {setRankExpectGameList} from "src/action/actions";
import { connect } from 'react-redux';

class GameListForExpect extends React.Component {
    public props:{items:gameListItemI[],setRankExpectGameList:(items:gameListItemI[])=>void}

    public request = (succeed:(data:gameListItemI[])=>void,failed:(err:requestErrorI)=>void) => {
        // console.log("request start")
        setTimeout(() => {
            const f = Math.random();
            if(f>0.1){
                // 模拟成功
                const data1:gameListItemI[]=[
                    {gameId:"0011",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",orderNum:12213},
                    {gameId:"0051",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:32431},
                    {gameId:"0031",gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",gameType:"卡牌",gameSize:"568M",orderNum:6465},
                    {gameId:"0021",gameName:"崩坏三",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"ARPG",gameSize:"568M",orderNum:4456456},
                    {gameId:"0091",gameName:"这是个啥游戏。。。",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:56456},
                    {gameId:"0041",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
                    {gameId:"0061",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:46456},
                    {gameId:"0071",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
                    {gameId:"0081",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"卡牌",gameSize:"568M",orderNum:345345},
                ]

                const data2:gameListItemI[]=[
                    {gameId:"0012",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",orderNum:12213},
                    {gameId:"0052",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:32431},
                    {gameId:"0032",gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",gameType:"卡牌",gameSize:"568M",orderNum:6465},
                    {gameId:"0022",gameName:"崩坏三",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"ARPG",gameSize:"568M",orderNum:4456456},
                    {gameId:"0092",gameName:"这是个啥游戏。。。",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:56456},
                    {gameId:"0042",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
                    {gameId:"0062",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:46456},
                    {gameId:"0072",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
                    {gameId:"0082",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"卡牌",gameSize:"568M",orderNum:345345},
                ]

                const data3:gameListItemI[]=[
                    {gameId:"0013",gameName:"命运-冠位指(Fate/Go)",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fgo.png",gameType:"卡牌",gameSize:"568M",orderNum:12213},
                    {gameId:"0053",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:32431},
                    {gameId:"0033",gameName:"梦幻模拟战",gameIconSrc:"//file.suafe.cn/blgc/gameicon/mhmnz.png",gameType:"卡牌",gameSize:"568M",orderNum:6465},
                    {gameId:"0023",gameName:"崩坏三",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"ARPG",gameSize:"568M",orderNum:4456456},
                    {gameId:"0093",gameName:"这是个啥游戏。。。",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:56456},
                    {gameId:"0043",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/blhx.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
                    {gameId:"0063",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/fs.png",gameType:"卡牌",gameSize:"568M",orderNum:46456},
                    {gameId:"0073",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/zs.png",gameType:"卡牌",gameSize:"568M",orderNum:456456},
                    {gameId:"0083",gameName:"撒旦",gameIconSrc:"//file.suafe.cn/blgc/gameicon/bh3.png",gameType:"卡牌",gameSize:"568M",orderNum:345345},
                ]

                const data4:gameListItemI[]=[]

                const pagenum = this.props.items.length/9
                let data:gameListItemI[] ;
                switch (pagenum){
                    case 0:
                        data=data1;
                        break;
                    case 1:
                        data=data2;
                        break;
                    case 2:
                        data=data3;
                        break;
                    default:
                        data=data4;
                        break;
                }

                succeed(data);
            }else{
                // 模拟失败
                const err:requestErrorI ={statusCode:"404",msg:"Not Found"}
                failed(err);
            }
        }, 3000);
    }

    public requestSucceedAction = (data:gameListItemI[])=>{
        this.props.setRankExpectGameList(data)
        // console.log("succeed\n","data:",data)
    }

    public requestFailedAction = (err:requestErrorI)=>{
        console.log(err.statusCode," ",err.msg)
        // console.log("need not do anything")
    }
    public render(){
        
        return (
            <div className="rank-game-list">
                <AutoLoadList 
                    request={this.request} 
                    requestSucceedAction={this.requestSucceedAction}
                    requestFailedAction={this.requestFailedAction}
                >
                    {
                    this.props.items.map((v, i)=>(
                        <GameListItem 
                            key={v.gameId}
                            gameId={v.gameId}
                            gameName={v.gameName}
                            gameIconSrc={v.gameIconSrc}
                            gameType={v.gameType}
                            gameSize={v.gameSize}
                            score={v.score}
                            ranking={i+1}
                        />
                    ))
                }
                </AutoLoadList>
            </div>
        )
    }
} 


export default connect(
    (state:any) => ({
        items: state.rankExpectGameList
    }),(dispatch:any) => ({
        setRankExpectGameList: (items:gameListItemI[]) => dispatch(setRankExpectGameList(items))
    })
)(GameListForExpect)