import actionTypes from "./actionTypes";

const login = (userId:number) =>({
    type:actionTypes.login,
    userId
})

const logout = () =>({
    type:actionTypes.logout,
})

const getCarousel = (carouselItems:any[]) =>({
    carouselItems,
    type:actionTypes.getCarousel,
})

export {
    login,
    logout,
    getCarousel
};