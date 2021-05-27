import IReducerAction from '../../interfaces/IReducerAction';
import ISeatsState from '../../interfaces/storeStates/ISeatsState';
import { GET_SEATS, SET_SEATS_LOADING } from '../types/seatsTypes';

const initialState: ISeatsState = {
    loading: false,
    seats: []
};

const seatsReducer = (state: ISeatsState = initialState, action: IReducerAction) => {
    switch(action.type) {
        case GET_SEATS:
            return {
                ...state,
                loading: false,
                seats: action.payload
            }
        case SET_SEATS_LOADING: 
            return {
                ...state,
                loading: true
            }
        default: 
            return state;
    }
}

export default seatsReducer;