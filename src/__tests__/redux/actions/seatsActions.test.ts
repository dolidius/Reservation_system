import {
    SET_SEATS_LOADING,
    GET_SEATS,
    SEATS_ERROR,
} from "./../../../redux/types/seatsTypes";
import { getSeats } from "../../../redux/actions/seatsActions";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { seats } from "../../../mock_data";

import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import { createMemoryHistory } from "history";

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const history = createMemoryHistory();

let store = mockStore({
    seats: {
        loading: false,
        seats: [],
        seatsToChoose: 0,
        nextToEachOther: false,
        error: false,
        errorMessage: "",
    },
});

describe("seatsActions", () => {
    beforeEach(() => {
        store.clearActions();
    });

    it("should dispatch GET_SEATS after successful seats api call", () => {
        mock.onGet("/seats").reply(200, { res: { data: seats } });

        store.dispatch(getSeats(2, true, history) as any).then(() => {
            let expectedActions = [
                { type: SET_SEATS_LOADING },
                { type: GET_SEATS, payload: seats },
            ];

            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("should dispatch SEATS_ERROR with wrong seats amount to choose", () => {
        store.dispatch(getSeats(0, true, history) as any);
        let expectedActions = [
            { type: SET_SEATS_LOADING },
            {
                type: SEATS_ERROR,
                payload: {
                    errorMessage: `Nie można zarezerwować 0 biletów`,
                },
            },
        ];

        expect(store.getActions()).toEqual(expectedActions);
    });
});
