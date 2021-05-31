import { GET_SEATS, SET_SEATS_LOADING, SEATS_ERROR } from "../types/seatsTypes";

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
            dispatch({
                type: SEATS_ERROR,
                payload: {
                    errorMessage: `Nie można zarezerwować ${seatsToChoose} biletów`,
                },
            });
        } else {
            axios
                .get("/seats", config)
                .then((res) => {
                    dispatch({
                        type: GET_SEATS,
                        payload: {
                            seatsToChoose,
                            nextToEachOther,
                            seats: res.data,
                        },
                    });
                    history.push({
                        pathname: "/rezerwacja",
                    });
                })
                .catch((e) => console.log(e));
        }
    };

export const setSeatsLoading = () => ({
    type: SET_SEATS_LOADING,
});
