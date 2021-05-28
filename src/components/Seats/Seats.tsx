import React from 'react';

import Seat from './Seat/Seat';

interface IProps {
    gridX: number;
    gridY: number;
}


const Seats: React.FC<IProps> = ({ gridX, gridY }) => {
    return (
        <Seat />
    )
}

export default Seats;