import actionTypes from "./actionTypes";

const setHomeBanner = (items:Array<{imgSrc:string,link:string}>) =>({
    items,
    type:actionTypes.getHomeBanner,
});

export {
    setHomeBanner,
};