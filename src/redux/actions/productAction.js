import axios from "axios"
import * as actionTypes from "../constants/productConstant"

const url = 'http://localhost:8000';

export const getFoods = () => async (dispatch) => {
    try{
        const {data} = await axios.get(`${url}/foods`)
        
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL, payload:error.message})
    }
}

