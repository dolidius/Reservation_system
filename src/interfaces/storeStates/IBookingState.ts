import ICords from "../ICords";

interface IBookedSeat {
    id: string;
    cords: ICords
}

export default interface IBookingState {
    bookedSeats: IBookedSeat[]
}