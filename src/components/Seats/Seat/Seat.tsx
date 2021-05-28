import React from 'react';

import { EmptySeat, ChosenSeat, ReservedSeat } from './Seat.style';

const Seat = () => {
    
    return (
        <div>
            <EmptySeat />
            <ChosenSeat />
            <ReservedSeat />
        </div>
    )

}

export default Seat;