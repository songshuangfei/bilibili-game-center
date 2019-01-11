import actionTypes from "../action/actionTypes"
const homeBanner = (
    state = [], action:{type:actionTypes,items:Array<{imgSrc:string,link:string}>}) => {
    switch (action.type) {
    case actionTypes.getHomeBanner:
        return action.items;
      default:
        return state;
    }
}
  
export default homeBanner;