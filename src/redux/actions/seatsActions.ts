import { GET_SEATS, SET_SEATS_LOADING, SEATS_ERROR, SET_NEW_TICKETS_AMOUNT } from "../types/seatsTypes";

import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

let config = {
    headers: { "Access-Control-Allow-Origin": "*" },
};

export const getSeats =
    (
        seatsToChoose: number,
        nextToEachOther: boolean,
        history: RouteComponentProps["history"]
    ) =>
    (dispatch: any) => {
        dispatch(setSeatsLoading());

        if (seatsToChoose <= 0) {
            return dispatch({
                type: SEATS_ERROR,
                payload: {
                    errorMessage: `Nie można zarezerwować ${seatsToChoose} biletów`,
                },
            });
        } else {
            return axios
                .get("/seats", config)
                .then((res) => {

                    history.push({
                        pathname: "/rezerwacja",
                    });

                    dispatch({
                        type: GET_SEATS,
                        payload: {
                            seatsToChoose,
                            nextToEachOther,
                            seats: res.data,
                        },
                    });
                    
                })
                .catch((e) => console.log(e));
        }
    };

export const setSeatsLoading = () => ({
    type: SET_SEATS_LOADING,
});

export const setNewTicketsAmount = (seatsToChoose: number) => ({
    type: SET_NEW_TICKETS_AMOUNT,
    payload: seatsToChoose
})