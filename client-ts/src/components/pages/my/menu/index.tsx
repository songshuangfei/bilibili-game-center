import * as React from "react";
import {Link} from "react-router-dom";
import {menuIcon,rightIcon} from "../../../icons"

import "./my-menu.css";

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
                    <span>无可用更新</span>
                    :<div className="update-num">{props.num}</div>
                }
            </div>
           <Link to="update"/>
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

const MenuItem = (props:{name:string,iconSrc:string,link:string,num:number}) => {
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
            <div className="bottom-line"/>
            <Link to={props.link}/>
        </div>
    )
}

class MyMenu extends React.Component {
    public render(){
        return(
            <div className="my-menu">
                <GameUpdate num={2}/>
                <div className="options">
                    <MenuItem name="已玩游戏" iconSrc={menuIcon.played} link="/playedgame" num={1}/>
                    <MenuItem name="已购游戏" iconSrc={menuIcon.bought} link="/boughtgame" num={0}/>
                    <MenuItem name="预约游戏" iconSrc={menuIcon.booked} link="/bookedgame" num={7}/>
                    <MenuItem name="我的评价" iconSrc={menuIcon.evaluate} link="/myevaluate" num={0}/>
                    <MenuItem name="我的收藏" iconSrc={menuIcon.collect} link="/mycollect" num={10}/>
                    <MenuItem name="我的礼包" iconSrc={menuIcon.gift} link="/mygift" num={1}/>
                    <MenuItem name="大会员礼包" iconSrc={menuIcon.bigGift} link="/biggift" num={0}/>
                </div>
                <div className="setting">
                    <Setting name="设置" iconSrc={menuIcon.setting} link="/setting"/>
                </div>
            </div>
        )
    }
}

export default MyMenu;