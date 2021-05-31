import { SET_BOOKING_SEATS } from './../../../redux/types/bookingTypes';
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { seats, bookedSeats } from "../../../mock_data";

import { setBookingSeats } from '../../../redux/actions/bookingActions';

const middleware = [thunk];
const mockStore = configureStore(middleware);

let store = mockStore({
    booking: {
        bookedSeats: []
    },
});

describe("booking actions", () => {

    it ("should dispatch SET_BOOKING_SEATS on action call", () => {
        store.dispatch(setBookingSeats(bookedSeats));
        let expectedActions = [
            { type: SET_BOOKING_SEATS, payload: bookedSeats },
           
        ];

        expect(store.getActions()).toEqual(expectedActions);
    });

});