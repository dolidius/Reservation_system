import React from 'react';
import ICords from '../../interfaces/ICords';
import ISeat from '../../interfaces/ISeat';
import Seat from './Seat/Seat';

import { SeatsGrid } from './Seats.style';

interface IProps {
    gridX: number;
    gridY: number;
    seats: ISeat[];
    chosenSeats: ICords[];
    onSeatAvailableClick: (x: number, y: number) => void;
    onSeatChosenClick: (x: number, y: number) => void;
}

const SeatsGridContainer: React.FC<IProps> = ({ gridX, gridY, seats, chosenSeats, children, onSeatAvailableClick, onSeatChosenClick }) => {

    const checkIfDefault = (seat: ISeat) => {

        for (const chosenSeat of chosenSeats) {
            if (seat.cords.x === chosenSeat.x && seat.cords.y === chosenSeat.y) {
                return true;
            }
        }

        return false;
    }

    const getSeatType = (seat: ISeat) => {
        if (seat.reserved) {
            return "reserved";
        } else if (checkIfDefault(seat)) {
            return "chosen"
        }

        return "available";
    }

    return (
        <SeatsGrid gridX={gridX} gridY={gridY} >
            {seats.map(seat => {
                return (
                    <Seat
                        type={getSeatType(seat)}
                        col={seat.cords.y + 1}
                        row={seat.cords.x + 1}
                        onSeatAvailableClick={onSeatAvailableClick}
                        onSeatChosenClick={onSeatChosenClick}
                    />
                )
            })}

        </SeatsGrid>
    )

}

export default SeatsGridContainer;