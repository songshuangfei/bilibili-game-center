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

const setHomeOrderGame = (items:homeOrderGameItemI[]) =>({
    items,
    type:actionTypes.getHomeOrderGame,
});

const setHomeNewestActivity = (item:homeActivityItemI) =>({
    item,
    type:actionTypes.getHomeNewestActivity,
});

export {
    setHomeBanner,
    setHomeHotGame,
    setHomeNewGame,
    setHomeHotStrategy,
    setHomeOrderGame,
    setHomeNewestActivity
};