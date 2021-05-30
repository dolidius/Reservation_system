import { combineReducers } from "redux";

import seatsReducer from './seatsReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
    seats: seatsReducer,
    booking: bookingReducer
});

export default rootReducer;