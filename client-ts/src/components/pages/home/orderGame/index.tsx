import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import LinkTitle from "src/components/commonComponent/link-title";
import {ImgLoadingIcon} from "src/components/icons";
import BlueBtn from "src/components/commonComponent/blue-btn";
import {Link} from "react-router-dom";
import "./home-order-game.css";

import { setHomeOrderGame } from "src/action/actions";
import { connect } from 'react-redux';
import ImgOnlineSrc from 'src/components/commonComponent/img-online-src';

const OrderGameItem = (props:homeOrderGameItemI)=>{
    return(
        <li className="home-order-game-item">
            <div className="content">
                <div className="cover" style={{
                    backgroundImage:`url(${ImgLoadingIcon})`,
                }}>
                    <ImgOnlineSrc src={props.coverImgSrc} alt=""/>
                    <Link to={`/game/${props.gameId}`}/>
                </div>
                <div className="order-info">
                    <div className="game-name">{props.gameName}</div>
                    <div className="ordered-num">{props.orderedNum}人已预约</div>
                </div>
                <div className="order-btn">
                    <BlueBtn width="5.4rem" name="预约" height="2rem" link={`/game/${props.gameId}`}/>
                </div>
            </div>
        </li>
    )
}

class OrdrGame extends React.Component {
    public props: {items:homeOrderGameItemI[],setHomeOrderGame:(items:homeOrderGameItemI[]) =>any};

    public componentDidMount(){
        if(this.props.items.length!==0){
            return;
        }
        console.log("get home order game");

        const games:homeOrderGameItemI[] =[
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/4.jpg",gameId:"1",gameName:"第五人格",orderedNum:8987},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/3.jpg",gameId:"2",gameName:"Fate grand order",orderedNum:228223},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/1.jpg",gameId:"3",gameName:"第五人格1爱神的箭噶法国",orderedNum:2347},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/2.jpg",gameId:"4",gameName:"第五人格2",orderedNum:8987},
            {coverImgSrc:"//file.suafe.cn/blgc/gamecover/2.jpg",gameId:"5",gameName:"第五人格2",orderedNum:89287},
        ]

        const that =this;
        setTimeout(() => {
            that.props.setHomeOrderGame(games);
        }, 3000);
    }

    public render(){
        
        return (
            <div>
                <LinkTitle title="预约中心" link="order" backgroundColor="none"/>
                <HorizontalScroll backgroundColor="none">
                    {
                        this.props.items.length === 0?
                        [1,2,3,4,5,6,7,8,9].map((v)=>(
                            <OrderGameItem 
                                key={v} 
                                coverImgSrc=""
                                orderedNum={0}
                                gameName="bilibili"
                                gameId=""
                            />
                        )):
                        this.props.items.map(v=>(
                            <OrderGameItem 
                                key={v.gameId} 
                                coverImgSrc={v.coverImgSrc} 
                                orderedNum={v.orderedNum}
                                gameName={v.gameName}
                                gameId={v.gameId}
                            />
                        ))
                    }
                </HorizontalScroll>
            </div>
        )
    }
}

export default connect(
    (state:any)=>({
        items:state.HomeOrderGame
    }),(dispatch:any)=>({
        setHomeOrderGame:(items:homeOrderGameItemI[]) => dispatch(setHomeOrderGame(items))
    })
)(OrdrGame);