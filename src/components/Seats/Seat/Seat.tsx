import React from 'react';

import { AvailableSeat, ChosenSeat, ReservedSeat, DisabledSeat } from './Seat.style';

interface IProps {
    type: string;
    col: number;
    row: number;
}

const Seat: React.FC<IProps> = ({ type, col, row }) => {
    
    return (
        <>
            {type === 'available' && <AvailableSeat col={col} row={row} />}
            {type === 'chosen' && <ChosenSeat col={col} row={row} />}
            {type === 'reserved' && <ReservedSeat col={col} row={row} />}
            {type === 'disabled' && <DisabledSeat col={col} row={row} />}

        </>
    )

}

export default Seat;