import { combineReducers } from "redux";

import seatsReducer from './seatsReducer';

const rootReducer = combineReducers({
    seats: seatsReducer
});

export default rootReducer;