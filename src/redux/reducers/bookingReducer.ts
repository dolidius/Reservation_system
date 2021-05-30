import { SET_BOOKING_SEATS } from './../types/bookingTypes';
import IReducerAction from "../../interfaces/IReducerAction";
import IBookingState from "../../interfaces/storeStates/IBookingState";

const initialState: IBookingState = {
    bookedSeats: []
}

const bookingReducer = (state = initialState, action: IReducerAction) => {
    switch(action.type) {
        case SET_BOOKING_SEATS:
            return {
                ...state,
                bookedSeats: action.payload
            }
        default: return state;
    }
}

export default bookingReducer;