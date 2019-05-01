import * as React from 'react';
import {Login} from "src/api-request/my";
import "./login-board.css";
import BlueBtn from "src/components/commonComponent/blue-btn";
import {checkboxGray,checkboxBlue} from "src/components/icons"

class LoginBoard extends React.Component{
    public props:{logSucceedDispatch:()=>void}
	public state = {
		uid:"",
		pwd:"",
        rememberme:false,
        info:""
	}
	
	public render(){
		return (
			<div className="login-board">
                <div className="input-box">
                    <h3>登录</h3>
                    <form onSubmit={this.submitHandler}>
                        <input 
                            name="uid"
                            placeholder="账号" 
                            type="text"
                            className="input-text"
                            value={this.state.uid} 
                            onChange={this.uidChangeHandler}
                        />
                        <input 
                            name="pwd"
                            placeholder="密码" 
                            type="password"
                            value={this.state.pwd} 
                            onChange={this.pwdChangeHandler}
                        />
                        <div className="inline-input-box">
                            <input 
                                style={{backgroundImage:`url(${this.state.rememberme?checkboxBlue:checkboxGray})`}}
                                type="checkbox" 
                                checked={this.state.rememberme} 
                                onChange={()=>this.setState( (ps:any) =>({
                                    rememberme:!ps.rememberme
                                }))}
                            />
                            <span className="remember-me">免登录</span>
                        </div>
                        <input className="hied-real-submit" type="submit" value="asdasd"/>
                    </form>
                    <div className="submit-btn" onClick={this.clickToLogin}>
                        <BlueBtn name="登录" width="100%" height="2.6rem" link="#"/>
                    </div>
                    <div className="inline-input-box">
                        <span className="inform">{this.state.info}</span>
                    </div>
                </div>
			</div>
		)
    }
    
    private uidChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            uid:e.target.value
        })
    }

    private pwdChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            pwd:e.target.value
        })
    }

	private submitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.logapi();
    }

    private wrongPwdOrUidHandler = ()=>{
        this.setState({
            info:"密码或账号错误"
        })
    }

    private logapi = ()=>{
        const {uid,pwd,rememberme} =this.state;
		Login(uid,pwd,rememberme,()=>{
            this.props.logSucceedDispatch();
        },()=>{
            this.wrongPwdOrUidHandler()
        },
        (err:any)=>{
			console.log(err)
		})
    }

    private clickToLogin = ()=>{
        this.logapi();
    }
}

export default LoginBoard;