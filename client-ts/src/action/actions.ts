import actionTypes from "./actionTypes";

const setHomeBanner = (items:bannerItemI[]) =>({
    items,
    type:actionTypes.getHomeBanner,
});

const setHomeHotGame = (items:gameIconItemI[]) =>({
    items,
    type:actionTypes.getHomeHotGame,
});

const setHomeNewGame = (items:gameIconItemI[]) =>({
    items,
    type:actionTypes.getHomeNewGame,
});

const setHomeHotStrategy = (items:homeStrategyItemI[]) =>({
    items,
    type:actionTypes.getHomeHotStrategy,
});

export {
    setHomeBanner,
    setHomeHotGame,
    setHomeNewGame,
    setHomeHotStrategy,
};