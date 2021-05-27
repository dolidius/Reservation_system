import { GET_SEATS, SET_SEATS_LOADING, GET_SEATS_ERROR } from '../types/seatsTypes';

import axios from 'axios';

let config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

export const getSeats = () => (dispatch: any) => {
    dispatch(setSeatsLoading());
    axios.get('/seats', config)
        .then(res => dispatch({
            type: GET_SEATS,
            payload: res.data
        }))
        .catch(e => console.log(e));
}

export const setSeatsLoading = () => ({
    type: SET_SEATS_LOADING
});