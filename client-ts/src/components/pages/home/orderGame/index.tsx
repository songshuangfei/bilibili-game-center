import * as React from 'react';
import HorizontalScroll from "src/components/commonComponent/horizontal-scroll";
import LinkTitle from "src/components/commonComponent/link-title";
import {ImgLoadingIcon} from "src/components/icons";
import BlueBtn from "src/components/commonComponent/blue-btn";
import {Link} from "react-router-dom";
import { setHomeOrderGame } from "src/action/actions";
import { connect } from 'react-redux';
import ImgOnlineSrc from 'src/components/commonComponent/img-online-src';
import {homeOrderGameApi} from "src/api-request/home";
import "./home-order-game.css";


const OrderGameItem = (props:homeOrderGameItemI)=>{
    const gameLink = props.gameId===""?"#":`/game?id=${props.gameId}`;
    return(
        <li className="home-order-game-item">
            <div className="content">
                <div className="cover" style={{
                    backgroundImage:`url(${ImgLoadingIcon})`,
                }}>
                    <ImgOnlineSrc src={props.coverImgSrc} alt=""/>
                    <Link to={gameLink}/>
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

class OrderGame extends React.Component {
    public props: {items:homeOrderGameItemI[],setHomeOrderGame:(items:homeOrderGameItemI[]) =>any};

    public componentDidMount(){
        if(this.props.items.length!==0){
            return;
        }
        const that =this;
        homeOrderGameApi(data=>{
            that.props.setHomeOrderGame(data);
        })
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
        items:state.homeOrderGame
    }),(dispatch:any)=>({
        setHomeOrderGame:(items:homeOrderGameItemI[]) => dispatch(setHomeOrderGame(items))
    })
)(OrderGame);