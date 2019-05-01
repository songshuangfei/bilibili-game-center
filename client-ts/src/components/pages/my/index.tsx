import * as React from 'react';
import pageScroll from "src/components/commonFunc/scroll";
import UserBoard from "./userBoard";
import Menu from "./menu";
import LoginBoard from "./loginBoard";
import {ListAutoLoadingShowBoard,loadingState} from "src/components/commonComponent/list-auto-loading-show-board"
import {autoLogin} from "src/api-request/my";
import { connect } from 'react-redux';
import {setLoginState} from "src/action/actions";



enum verifyState {
	verifing,
	logined,
	unlogined
}

class My extends React.Component {
	public props:{loginState:number,setLoginState:(state:number)=>void}

	public componentWillUnmount(){
		pageScroll.saveScrollTop("my");
	}
	
	public componentDidMount(){
		pageScroll.setScrollTopToPage("my");
		if(this.props.loginState === verifyState.logined){
			return;
		}
		autoLogin(()=>{
			this.logSucceedDispatch();
		},(err:any)=>{
			this.props.setLoginState(verifyState.unlogined);
		});
	}

	public render() {
		return (
			<div>
				{
					this.props.loginState === verifyState.verifing?
					<ListAutoLoadingShowBoard now={loadingState.loading} failedRetry={()=>""}/>:""
				}
				{
					this.props.loginState === verifyState.logined?
					<div>
						<UserBoard/>
						<Menu/>
					</div>:""
				}
				{
					this.props.loginState === verifyState.unlogined?<LoginBoard logSucceedDispatch={this.logSucceedDispatch}/>:""
				}	
			</div>
		)
	}

	private logSucceedDispatch = ()=> {
		this.props.setLoginState(verifyState.logined);
	}
}


export default connect(
    (state:any) => ({
        loginState: state.loginState
    }),(dispatch:any) => ({
        setLoginState: (state:number) => dispatch(setLoginState(state))
    })
)(My)