import ICords from '../../interfaces/ICords';
import { SET_BOOKING_SEATS } from './../types/bookingTypes';

export const setBookingSeats = (bookedSeats: ICords[]) => {
    
    return {
        type: SET_BOOKING_SEATS,
        payload: bookedSeats
    }

}