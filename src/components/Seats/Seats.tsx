import React from 'react';
import ISeat from '../../interfaces/ISeat';

import Seat from './Seat/Seat';

import { SeatsGrid } from './Seats.style';

interface IProps {
    gridX: number;
    gridY: number;
    seats: ISeat[];
}

const Seats: React.FC<IProps> = ({ gridX, gridY, seats }) => {
    return (
        <SeatsGrid gridX={gridX} gridY={gridY}>
            {seats.map(seat => {
                console.log(seat.cords);
                return (
                    <Seat
                        type="available"
                        col={seat.cords.x + 1}
                        row={seat.cords.y + 1}
                    />
                )
            })}
        </SeatsGrid>
    )
}

export default Seats;