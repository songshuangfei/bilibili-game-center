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

const findSpecial = (
  state:bannerWithIdItemI[] = [], 
  action:{type:actionTypes,items:bannerWithIdItemI[]}
) => {
  switch (action.type) {
  case actionTypes.getFindSpecial:
      return action.items;
    default:
      return state;
  }
}

const findOrdrNewGame = (
  state:gameIconItemI[] = [], 
  action:{type:actionTypes,items:gameIconItemI[]}
) => {
  switch (action.type) {
  case actionTypes.getFindOrdrNewGame:
      return action.items;
    default:
      return state;
  }
}

const findBiliGame = (
  state:gameIconItemI[] = [], 
  action:{type:actionTypes,items:gameIconItemI[]}
) => {
  switch (action.type) {
  case actionTypes.getFindBiliGame:
      return action.items;
    default:
      return state;
  }
}

const findPayGame = (
  state:gameIconItemI[] = [], 
  action:{type:actionTypes,items:gameIconItemI[]}
) => {
  switch (action.type) {
  case actionTypes.getFindPayGame:
      return action.items;
    default:
      return state;
  }
}

const findHotComment = (
  state:findHotCommentItemI[] = [], 
  action:{type:actionTypes,items:findHotCommentItemI[]}
) => {
  switch (action.type) {
  case actionTypes.getFindHotComment:
      return action.items;
    default:
      return state;
  }
}

const strategyHotGame = (
  state:bannerWithIdItemI[] = [], 
  action:{type:actionTypes,items:bannerWithIdItemI[]}
) => {
  switch (action.type) {
  case actionTypes.getStrategyHotGame:
      return action.items;
    default:
      return state;
  }
}

const myUserBoard = (
  state = {}, 
  action:{type:actionTypes,item:userPageInfoI}
) => {
  switch (action.type) {
  case actionTypes.getMyUserBoard:
      return action.item;
    default:
      return state;
  }
}

const myMenu = (
  state = {}, 
  action:{type:actionTypes,item:myMenuDataI}
) => {
  switch (action.type) {
  case actionTypes.getMyMenu:
      return action.item;
    default:
      return state;
  }
}

const rankPageTab = (
  state:pageTabIndexI = {tabIndex:0}, 
  action:{type:actionTypes,item:pageTabIndexI}
) => {
  switch (action.type) {
  case actionTypes.getRankPageTab:
      return action.item;
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
  findSpecial,
  findOrdrNewGame,
  findBiliGame,
  findPayGame,
  findHotComment,
  strategyHotGame,
  myUserBoard,
  myMenu,
  rankPageTab,
})
