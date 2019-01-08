import { combineReducers } from 'redux'
import userLogin from './userLogin';
import homeBanner from './homeBanner';


export default combineReducers({
  homeBanner,
  userLogin
})