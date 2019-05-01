import axios from "axios";
import { appconfig } from "src/appConfig"
const {apiRoot} = appconfig
axios.defaults.withCredentials = true;
axios.defaults.baseURL =apiRoot;

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


function myUserInfo (succeed:(data:userPageInfoI)=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:userPageInfoI = {
            coverSrc:"//file.suafe.cn/blgc/userback/default.jpg",
            follower:21,
            following:56,
            goodNum:1423,
            headImgSrc:"//file.suafe.cn/blgc/userhead/2.jpg",
            lv:5,
            sex:"female",
            uid:"2537832",
            userName:"夏池萤",
        }
        succeed(data)

    }, 1000);
}

function myMenuData (succeed:(data:myMenuDataI)=>void, failed?:()=>void) {
    setTimeout(() => {
        const data:myMenuDataI = {
            bigGift:0,
            bookedGame:8,
            boughtGame:0,
            myCollect:0,
            myEvaluate:0,
            myGift:0,
            playedGame:1,
            updateNum:2,
        }
        succeed(data)
    }, 1000);
}

export {
    myUserInfo,
    myMenuData,
    autoLogin,
    Login
}