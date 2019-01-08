import actionTypes from "../action/actionTypes"
const userLogin = (state = {isloged:false, userId: null}, action: any): any => {
    switch (action.type) {
      case actionTypes.login:
        return {
          isloged: true,
          userId: action.userId
        };
      case actionTypes.logout:
        return {
          isloged:false,
          userId:null
        }
      default:
        return state
    }
}
  
export default userLogin;