import { bookedSeats } from './../../../mock_data';
import IBookingState from "../../../interfaces/storeStates/IBookingState";
import bookingReducer from "../../../redux/reducers/bookingReducer";

import { SET_BOOKING_SEATS } from '../../../redux/types/bookingTypes';


const initialState: IBookingState = {
    bookedSeats: []
}

describe("booking reducer", () => {

    it("should return initial state on default", () => {
        expect(bookingReducer(undefined, { type: "" })).toEqual(initialState);
    });

    it("should handle SET_BOOKING_SEATS", () => {
        const setBookingSeatsAction = {
            type: SET_BOOKING_SEATS,
            payload: bookedSeats
        }

        expect(bookingReducer(initialState, setBookingSeatsAction)).toEqual({ bookedSeats });
    });

});