import ISeat from "../ISeat";

export default interface ISeatsState {
    loading: boolean;
    seats: ISeat[];
    seatsToChoose: number;
    nextToEachOther: boolean;
    error: boolean;
    errorMessage: string;
}