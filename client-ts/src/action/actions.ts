import actionTypes from "./actionTypes";

// 登录action
const login = (userId:number) =>({
    type:actionTypes.login,
    userId
});

const logout = () =>({
    type:actionTypes.logout,
});

// ui相关action

// ajax请求数据actions
const setHomeBanner = (items:Array<{img:string,link:string}>) =>({
    items,
    type:actionTypes.getHomeBanner,
});

export {
    login,
    logout,
    setHomeBanner,
};