import React from 'react';

import { AvailableSeat, ChosenSeat, ReservedSeat, DisabledSeat } from './Seat.style';

interface IProps {
    type: string;
}

const Seat: React.FC<IProps> = ({ type }) => {
    
    return (
        <>
        
            {type === 'available' && <AvailableSeat />}
            {type === 'chosen' && <ChosenSeat />}
            {type === 'reserved' && <ReservedSeat />}
            {type === 'disabled' && <DisabledSeat />}

        </>
    )

}

export default Seat;