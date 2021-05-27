import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import ISeatsState from '../../../interfaces/storeStates/ISeatsState';

interface IProps {
    seats: ISeatsState
}

const Booking: React.FC<IProps> = ({ seats }) => {

    useEffect(() => {
        console.log(seats);
    }, [seats])

    return (
        <div>
            booking
        </div>
    )

}

const mapStateToProps = (state: any) => ({
    seats: state.seats
})

export default connect(mapStateToProps, {})(Booking);