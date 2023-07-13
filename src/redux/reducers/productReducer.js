import * as actionTypes from "../constants/productConstant"

export const getFoodsReducer = (state ={foods: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS: 
            return {foods: action.payload}
        case actionTypes.GET_PRODUCTS_FAIL:
            return {error:action.payload}
        default:
            return state
    }

}
