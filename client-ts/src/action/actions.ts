import actionTypes from "./actionTypes";

// ui相关action

// ajax请求数据actions
const setHomeBanner = (items:Array<{img:string,link:string}>) =>({
    items,
    type:actionTypes.getHomeBanner,
});

export {
    setHomeBanner,
};