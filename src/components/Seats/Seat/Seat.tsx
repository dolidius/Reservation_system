import React from 'react';

import { AvailableSeat, ChosenSeat, ReservedSeat } from './Seat.style';

interface IProps {
    type: string;
    col: number;
    row: number;
    onSeatAvailableClick: (x: number, y: number) => void;
    onSeatChosenClick: (x: number, y: number) => void;
}

const Seat: React.FC<IProps> = ({ type, col, row, onSeatAvailableClick, onSeatChosenClick }) => {

    return (
        <>
            {type === 'available' && <AvailableSeat grid onClick={() => onSeatAvailableClick(row - 1, col - 1)} col={col} row={row} />}
            {type === 'chosen' && <ChosenSeat grid onClick={() => onSeatChosenClick(row - 1, col - 1)} col={col} row={row} />}
            {type === 'reserved' && <ReservedSeat grid col={col} row={row} />}

        </>
    )

}

export default Seat;