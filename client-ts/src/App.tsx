import * as React from 'react';
import { Suspense } from 'react';
import { Route, Switch, } from 'react-router-dom';
import "./app.css";
import Nav from "./components/nav";
import TitleBar from "./components/titleBar";
import PageLoading from "./components/pageLoading"

const Home = React.lazy(() => import("./components/pages/home"));
const Rank = React.lazy(() => import("./components/pages/rank"));
const Find = React.lazy(() => import("./components/pages/find"));
const Strategy = React.lazy(() => import("./components/pages/strategy"));
const My = React.lazy(() => import("./components/pages/my"));
const Search = React.lazy(() => import("./components/pages/search"));
const GamePage = React.lazy(() => import("./components/pages/gamePage"));
const MsgPage = React.lazy(() => import("./components/pages/msg"));

const MyDownload = React.lazy(() => import("./components/pages/my-download"));
const NotFound = React.lazy(() => import("./components/pages/notFound"));
const Setting = React.lazy(() => import("./components/pages/setting"));


function AsyncComponent(props:{Ac:any,route:any}){
	const { Ac, route } = props;
	return(
		<Suspense fallback={<PageLoading/>}>
			<Ac {...route}/>
		</Suspense>
	)
}
function MainPagesWrapper(){
	const pathNow:string = window.location.pathname;
		const isManPage:boolean = ['/','/rank','/find','/strategy','/my'].indexOf(pathNow)===-1?false:true; 
	return (
		<div className="title-pages-wrapper">
			<Switch>
				<Route exact={true} path="/" component={(route:any)=><AsyncComponent Ac={Home} route={route} />}/>
				<Route path="/rank" component={(route:any)=><AsyncComponent Ac={Rank} route={route} />}/>
				<Route path="/find" component={(route:any)=><AsyncComponent Ac={Find} route={route} />}/>
				<Route path="/strategy" component={(route:any)=><AsyncComponent Ac={Strategy} route={route} />}/>
				<Route path="/my" component={(route:any)=><AsyncComponent Ac={My} route={route} />}/>
				<Route path="/msg" component={(route:any)=><AsyncComponent Ac={MsgPage} route={route} />}/>
				<Route path="/mydownload" component={(route:any)=><AsyncComponent Ac={MyDownload} route={route} />} />
				<Route path="/setting" component={(route:any)=><AsyncComponent Ac={Setting} route={route} />}/>
			</Switch>
			<TitleBar/>
			{isManPage?<Nav/>:""}
		</div>
	)
}

function OtherPagesWrapper(){
	return (
		<div className="no-title-pages-wrapper">
			<Switch>
				<Route path="/search" component={(route:any)=><AsyncComponent Ac={Search} route={route}/>}/>
				<Route path="/game" component={(route:any)=><AsyncComponent Ac={GamePage} route={route}/>} />
				<Route path="*" component={(route:any)=><AsyncComponent Ac={NotFound} route={route}/>}/>
			</Switch>
		</div>
	)
}

class App extends React.Component {
	public render() {
		const pathNow:string = window.location.pathname;
		const isTitlePage:boolean = ['/','/rank','/find','/strategy','/my','/msg',"/mydownload","/setting"].indexOf(pathNow)===-1?false:true; 
		return (
			<div className="App">
				{isTitlePage?<MainPagesWrapper/>:<OtherPagesWrapper/>}
			</div>
		);
	}
}

export default App;
