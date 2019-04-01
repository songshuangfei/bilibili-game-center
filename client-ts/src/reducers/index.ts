import { combineReducers } from 'redux'
import actionTypes from "../action/actionTypes"

// home
/**
 * return the state of home banner
 * @param state hombanner state
 * @param action action to update data of homebanner
 * 
 */
const homeBanner = (
    state:bannerItemI[] = [], 
    action:{type:actionTypes,items:bannerItemI[]}
) => {
    switch (action.type) {
    case actionTypes.getHomeBanner:
        return action.items;
      default:
        return state;
    }
}

const homeHotGame = (
  state:gameIconItemI[] = [], 
  action:{type:actionTypes,items:gameIconItemI[]}
) => {
  switch (action.type) {
  case actionTypes.getHomeHotGame:
      return action.items;
    default:
      return state;
  }
}

const homeNewGame = (
  state:gameIconItemI[] = [], 
  action:{type:actionTypes,items:gameIconItemI[]}
) => {
  switch (action.type) {
  case actionTypes.getHomeNewGame:
      return action.items;
    default:
      return state;
  }
}

const homeHotStrategy = (
  state:homeStrategyItemI[] = [], 
  action:{type:actionTypes,items:homeStrategyItemI[]}
) => {
  switch (action.type) {
  case actionTypes.getHomeHotStrategy:
      return action.items;
    default:
      return state;
  }
}

const homeOrderGame = (
  state: homeOrderGameItemI[] = [],
  action:{type:actionTypes, items:homeOrderGameItemI[]}
) => {
  switch (action.type) {
    case actionTypes.getHomeOrderGame:
        return action.items;
      default:
        return state;
    }
}

const homeNewestActivity = (
  state = {},
  action:{type:actionTypes, item:homeActivityItemI}
) => {
  switch (action.type) {
    case actionTypes.getHomeNewestActivity:
        return action.item;
      default:
        return state;
    }
}


// find

const findBanner = (
  state:bannerItemI[] = [], 
  action:{type:actionTypes,items:bannerItemI[]}
) => {
  switch (action.type) {
  case actionTypes.getFindBanner:
      return action.items;
    default:
      return state;
  }
}



export default combineReducers({
  homeBanner,
  homeHotGame,
  homeNewGame,
  homeHotStrategy,
  homeOrderGame,
  homeNewestActivity,
  findBanner,
})
