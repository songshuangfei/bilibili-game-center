import * as React from "react";
import { Route,Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import titleIcon from "src/components/icons/title-icons";
import { RouteComponentProps } from 'react-router-dom';
import "./titleBar.css";

// 只有返回键的title
const OnlyBackBtnTitlebar = (props:{titleName:string,clickToBack:()=>void,hasBoxShadow:boolean})=>{
    let outStyle;
    props.hasBoxShadow?outStyle={}:outStyle={boxShadow:"none"}
    return (
        <div className="title-bar-out" style={outStyle}>
            <Link className="title-link-block" to="#" onClick={props.clickToBack}>
                <img src={titleIcon.back} alt=""/>
            </Link>
            <Link className="title-link-block" to="#"/>
            <div className="page-name">{props.titleName}</div>
            <Link className="title-link-block" to="#"/>
            <Link className="title-link-block" to="#"/>
        </div>
    )
}

const HomeTitle = ()=>{
    return (
        <div className="title-bar-out">
            <a className="title-link-block" href="http://bilibili.com">
                <img src={titleIcon.back} alt=""/>
            </a>
            <Link className="title-link-block" to="#"/>
            <div className="page-name">首页</div>
            <Link className="title-link-block" to="/msg">
                <img src={titleIcon.msg} alt=""/>
            </Link>
            <Link className="title-link-block" to="/search">
                <img src={titleIcon.search} alt=""/>
            </Link>
        </div>
    )
}

const RankTitle = ()=>{
    return (
        <div className="title-bar-out">
            <Link className="title-link-block" to="/">
                <img src={titleIcon.back} alt=""/>
            </Link>
            <Link className="title-link-block" to="#"/>
            <div className="page-name">排行</div>
            <Link className="title-link-block" to="#"/>
            <Link className="title-link-block" to="/search">
                <img src={titleIcon.search} alt=""/>
            </Link>
        </div>
    )
}

const FindTitle = ()=>{
    return (
        <div className="title-bar-out">
            <Link className="title-link-block" to="/">
                <img src={titleIcon.back} alt=""/>
            </Link>
            <Link className="title-link-block" to="#"/>
            <div className="page-name">发现</div>
            <Link className="title-link-block" to="#"/>
            <Link className="title-link-block" to="/search">
                <img src={titleIcon.search} alt=""/>
            </Link>
        </div>
    )
}

const StrategyTitle = ()=>{
    return (
        <div className="title-bar-out">
            <Link className="title-link-block" to="/">
                <img src={titleIcon.back} alt=""/>
            </Link>
            <Link className="title-link-block" to="#"/>
            <div className="page-name">攻略</div>
            <Link className="title-link-block" to="/strategysearch">
                <img src={titleIcon.more} alt=""/>
            </Link>
            <Link className="title-link-block" to="/search">
                <img src={titleIcon.search} alt=""/>
            </Link>
        </div>
    )
}

const MyTitle = ()=>{
    return (
        <div className="title-bar-out">
            <Link className="title-link-block" to="/">
                <img src={titleIcon.back} alt=""/>
            </Link>
            <Link className="title-link-block" to="#"/>
            <div className="page-name">我的</div>
            <Link className="title-link-block" to="#"/>
            <Link className="title-link-block" to="/mydownload">
                <img src={titleIcon.myDownload} alt=""/>
            </Link>
        </div>
    )
}

const MsgTitle = (props: RouteComponentProps)=>(
    <OnlyBackBtnTitlebar titleName="我的消息" clickToBack={props.history.goBack} hasBoxShadow={true}/>
)

const MyDownloadTitle = (props: RouteComponentProps)=>(
    <OnlyBackBtnTitlebar titleName="我的下载" clickToBack={props.history.goBack} hasBoxShadow={true}/>
)

const SettingTitle = (props: RouteComponentProps)=>(
    <OnlyBackBtnTitlebar titleName="设置" clickToBack={props.history.goBack} hasBoxShadow={true}/>
)

const TitleBar= () => {
    return(
        <Switch>
            <Route exact={true} path="/" component={HomeTitle}/>
            <Route path="/rank" component={RankTitle}/>
            <Route path="/find" component={FindTitle}/>
            <Route path="/strategy" component={StrategyTitle}/>
            <Route path="/my" component={MyTitle}/>
            <Route path="/msg" component={MsgTitle}/>
            <Route path="/mydownload" component={MyDownloadTitle}/>
            <Route path="/setting" component={SettingTitle}/>
        </Switch>
    )
}

export default TitleBar;