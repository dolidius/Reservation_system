import ISeatsState from "../../../interfaces/storeStates/ISeatsState";
import seatsReducer from "../../../redux/reducers/seatsReducer";

import { seats } from '../../../mock_data';

import {
    GET_SEATS,
    SET_SEATS_LOADING,
    SEATS_ERROR,
    SET_NEW_TICKETS_AMOUNT,
} from "../../../redux/types/seatsTypes";

const initialState: ISeatsState = {
    loading: false,
    seats: [],
    seatsToChoose: 0,
    nextToEachOther: false,
    error: false,
    errorMessage: "",
};

describe("seatsReducer", () => {

    it("should return initial state on default", () => {
        expect(seatsReducer(undefined, { type: "" })).toEqual(initialState);
    });

    it("should handle GET_SEATS", () => {

        const payload = {
            seats,
            seatsToChoose: 2,
            nextToEachOther: true
        }

        const getSeatsAction = {
            type: GET_SEATS,
            payload
        }

        let newState = {
            ...initialState,
            seats,
            seatsToChoose: 2,
            nextToEachOther: true
        }

        expect(seatsReducer(initialState, getSeatsAction)).toEqual(newState);

    });

    it("should handle SET_SEATS_LOADING", () => {
        const setSeatsLoadingAction = {
            type: SET_SEATS_LOADING
        }

        expect(seatsReducer(initialState, setSeatsLoadingAction)).toEqual({ ...initialState, loading: true });

    });

    it("should handle SEATS_ERROR", () => {
        const errorMessage = `Nie można zarezerwować 0 biletów`;
        const seatsErrorAction = {
            type: SEATS_ERROR,
            payload: {
                errorMessage
            }
        }

        expect(seatsReducer(initialState, seatsErrorAction)).toEqual({ ...initialState, error: true, errorMessage });

    });

    it("should handle SET_NEW_TICKETS_AMOUNT", () => {
        const setNewTicketsAmountAction = {
            type: SET_NEW_TICKETS_AMOUNT,
            payload: 2
        }

        expect(seatsReducer(initialState, setNewTicketsAmountAction)).toEqual({ ...initialState, seatsToChoose: 2 });
    })

});
