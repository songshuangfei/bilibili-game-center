import {actionTypes} from "../action"
const carousel = (state = [{imgUrl:"default.png",link:"page1.html"}], action: any): any[] => {
  alert("carousel");
    switch (action.type) {
      case actionTypes.getCarousel:
        return action.carouselItems;
      default:
        return state;
    }
}
  
export default carousel;