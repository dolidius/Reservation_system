import React from 'react';
import ISeat from '../../interfaces/ISeat';

import Seat from './Seat/Seat';

interface IProps {
    gridX: number;
    gridY: number;
    seats: ISeat[];
}


const Seats: React.FC<IProps> = ({ gridX, gridY, seats }) => {
    return (
        <Seat />
    )
}

export default Seats;