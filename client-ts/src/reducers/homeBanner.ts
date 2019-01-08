import actionTypes from "../action/actionTypes"
const homeBanner = (
    state = [], action:{type:actionTypes,items:Array<{img:string,link:string}>}): any => {
    switch (action.type) {
    case actionTypes.getHomeBanner:
        return action.items;
      default:
        return state;
    }
}
  
export default homeBanner;