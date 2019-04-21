import * as React from "react";
import {Link} from "react-router-dom";
import {rightIcon} from "src/components/icons"
import menuIcon from "src/components/icons/menu"

import { connect } from "react-redux";
import { setMyMenu } from "src/action/actions";
import "./my-menu.css";
import {myMenuData} from "src/api-request/my"

const GameUpdate = (props:{num:number}) => {
    return(
       <div className="game-update">
            <div className="left">
                <img className="icon" src={menuIcon.update} alt=""/>
                <span className="btn-name">游戏更新</span>
            </div>
            <div className="right">
                {
                    props.num===0?
                    <span className="no-update">无可用更新</span>
                    :<div className="update-num"><span>{props.num}</span></div>
                }
            </div>
           <Link to="/update"/>
       </div>
   )
}

const Setting = (props:{name:string,iconSrc:string,link:string}) => {
    return(
       <div className="menu-item">
           <div className="left">
               <img className="icon"  src={props.iconSrc} alt=""/>
               <span className="btn-name">{props.name}</span>
           </div>
           <div className="right">
               <img className="right-icon" src={rightIcon} alt=""/>
           </div>
           <Link to={props.link}/>
       </div>
   )
}

const MenuItem = (props:{name:string,iconSrc:string,link:string,num:number,haveLine:boolean}) => {
     return(
        <div className="menu-item">
            <div className="left">
                <img className="icon"  src={props.iconSrc} alt=""/>
                <span className="btn-name">{props.name}</span>
            </div>
            <div className="right">
                <span className="btn-data">{props.num}</span>
                <img className="right-icon" src={rightIcon} alt=""/>
            </div>
            {props.haveLine?<div className="bottom-line"/>:""}
            <Link to={props.link}/>
        </div>
    )
}

class MyMenu extends React.Component {
    public props:{item:myMenuDataI, setMyMenu:(item: myMenuDataI)=>void}

    public componentDidMount(){
        if(JSON.stringify(this.props.item) !== "{}"){
            return;
        }
        // console.log("get  my menu")

        const that =this;
        myMenuData(data=>{
            that.props.setMyMenu(data);
        })
    }

    public render(){
        const {
            bigGift,
            bookedGame,
            boughtGame,
            myCollect,
            myEvaluate,
            myGift,
            playedGame,
            updateNum
        } = this.props.item;
        return(
            <div className="my-menu">
                <GameUpdate num={updateNum?updateNum:0}/>
                <div className="options">
                    <MenuItem name="已玩游戏" iconSrc={menuIcon.played} link="/playedgame" num={playedGame?playedGame:0} haveLine={true}/>
                    <MenuItem name="已购游戏" iconSrc={menuIcon.bought} link="/boughtgame" num={boughtGame?boughtGame:0} haveLine={true}/>
                    <MenuItem name="预约游戏" iconSrc={menuIcon.booked} link="/bookedgame" num={bookedGame?bookedGame:0} haveLine={true}/>
                    <MenuItem name="我的评价" iconSrc={menuIcon.evaluate} link="/myevaluate" num={myEvaluate?myEvaluate:0} haveLine={true}/>
                    <MenuItem name="我的收藏" iconSrc={menuIcon.collect} link="/mycollect" num={myCollect?myCollect:0} haveLine={true}/>
                    <MenuItem name="我的礼包" iconSrc={menuIcon.gift} link="/mygift" num={myGift?myGift:0} haveLine={true}/>
                    <MenuItem name="大会员礼包" iconSrc={menuIcon.bigGift} link="/biggift" num={bigGift?bigGift:0} haveLine={false}/>
                </div>
                <div className="setting">
                    <Setting name="设置" iconSrc={menuIcon.setting} link="/setting"/>
                </div>
            </div>
        )
    }
}

export default connect(
    (state:any) => ({
        item: state.myMenu
    }),(dispatch:any) => ({
        setMyMenu: (item:myMenuDataI) => dispatch(setMyMenu(item))
    })
)(MyMenu)