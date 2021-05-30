import React from 'react';

import { connect } from 'react-redux';
import IBookingState from '../../../interfaces/storeStates/IBookingState';

interface IProps {
    bookingStore: IBookingState;
}

const BookingSuccess: React.FC<IProps> = ({ bookingStore }) => {
    return (
        <div>
            {bookingStore.bookedSeats.map(seat => (
                <div>
                    x: {seat.x}, y: {seat.y}, id: s{`${seat.x}${seat.y}`}
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    bookingStore: state.booking
})

export default connect(mapStateToProps, {})(BookingSuccess);