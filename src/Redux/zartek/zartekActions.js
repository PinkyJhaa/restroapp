import axios from 'axios';
import {ZARTEK_FOOD,ZARTEK_FOOD_SUCCESS,ZARTEK_FOOD_FAILURE,ZARTEK_FOOD_RESET } from './ZartekTypes'

export const zartekfood = () => {
    return{
        type:ZARTEK_FOOD
    }
}

export const zartekfoodSuccess = (zartekfoodData) => {
    return{
        type:ZARTEK_FOOD_SUCCESS,
        payload: zartekfoodData
    }
}
export const zartekfoodFailure = (error) => {
    return{
        type:ZARTEK_FOOD_FAILURE,
        payload: error
    }
}

export const zartekfoodReset = () => {
    return{
        type:ZARTEK_FOOD_RESET
    }
}



export const hitzartekfoodAPI = () => {
    return (dispatch) => {
        dispatch(zartekfood())
            // axios.post(`${BASE_URL}withdraw`,{
            axios.post(`https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`,{
        }).then( response => {
            const zartekfoodResponse = response.data
            dispatch(zartekfoodSuccess(zartekfoodResponse))
            setTimeout(function(){
                dispatch(zartekfoodReset())
            }, 1000);
    }).catch(error => {
        const errorMsg = error.message
        dispatch(zartekfoodFailure(errorMsg))
    })
    }
}

