import * as React from "react";
import { NavLink } from 'react-router-dom';
// import  { navIcon } from "./icons"
import "./nav.css";
import { navIcon } from './icons';

function LinkItems(props:{selfPath:string,linkName:string,icon:any,iconActive:any}){
    const pathNameNow: string = window.location.pathname;
    const nowIcon = pathNameNow === props.selfPath? props.iconActive:props.icon;
    return (
        <li>
            <NavLink exact={props.selfPath==='/'? true: false} to={props.selfPath} activeClassName="nav-link-active-style">
                <div className="nav-icon">
                    <img src={nowIcon} alt=""/>
                    <span>{props.linkName}</span>
                </div>
            </NavLink>
        </li>
    );
}

function Nav(){
    return(
        <nav className="nav-bar">
            <ul>
               <LinkItems selfPath="/" linkName="精选" icon={navIcon.home} iconActive={navIcon.homeAct}/>
               <LinkItems selfPath="/rank" linkName="排行" icon={navIcon.rank} iconActive={navIcon.rankAct}/>
               <LinkItems selfPath="/find" linkName="发现" icon={navIcon.find} iconActive={navIcon.findAct}/>
               <LinkItems selfPath="/strategy" linkName="攻略" icon={navIcon.strategy} iconActive={navIcon.strategyAct}/>
               <LinkItems selfPath="/my" linkName="我的" icon={navIcon.my} iconActive={navIcon.myAct}/>
            </ul>
        </nav>
    );
}

export default Nav;