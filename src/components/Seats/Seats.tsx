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

        </SeatsGrid>
    )
}

export default Seats;