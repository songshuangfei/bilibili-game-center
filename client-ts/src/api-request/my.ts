import axios from "axios";
import { appconfig } from "src/appConfig"
const {apiRoot} = appconfig
axios.defaults.withCredentials = true;
axios.defaults.baseURL =apiRoot;

async function Login (
    uid:string,
    pwd:string,
    rememberme:boolean,
    succeed:()=>void, 
    wrongPwdOrUid:()=>void,
    failed:(err:any)=>void
) {
    try {
        const res  =  await axios({
            method: 'POST',
            url: `/login`,
            data: {
                uid,
                pwd,
                rememberme
            },
            headers: {'Content-Type': 'application/json'},
        });
        if(res.data.status === 1001){
            succeed();
        }else{
            wrongPwdOrUid();
        }
    } catch (error) {
        failed(error)
    }
}

async function autoLogin (succeed:()=>void, failed:(err?:any)=>void) {
    try {
        const res  =  await axios.get(`/login`);
        if(res.data.status===1011){
            // 自动登录验证成功
                succeed();
        }else{
            failed();
        }
    } catch (error) {
        // 自动登录验失败，403
        failed(error);
    }
}

async function myUserInfo (succeed:(data:userPageInfoI)=>void, failed?:()=>void) {
    const res  =  await axios.get(`/user/info`);
    succeed(res.data.info)
}

async function myMenuData (succeed:(data:myMenuDataI)=>void, failed?:()=>void) {
    const res  =  await axios.get(`/user/menu`);
    succeed(res.data.menuInfo)
}

export {
    myUserInfo,
    myMenuData,
    autoLogin,
    Login
}