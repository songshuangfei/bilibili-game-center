import { combineReducers } from 'redux'
import actionTypes from "../action/actionTypes"

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
  
export default combineReducers({
  homeBanner,
  homeHotGame,
  homeNewGame
})
