import React, { useEffect, useState } from 'react';
import ISeat from '../../interfaces/ISeat';

import Seat from './Seat/Seat';

import { SeatsGrid } from './Seats.style';

interface IProps {
    gridX: number;
    gridY: number;
    seats: ISeat[];
}

interface IInterval {
    startY: number,
    endY: number,
    row: number;
}

const Seats: React.FC<IProps> = ({ gridX, gridY, seats }) => {


    useEffect(() => {
        console.log(seats);
        findCloseSeats();
    }, [seats])

    const findCloseSeats = () => {

        const intervals: IInterval[] = [];

        // x(row) y(column)
        let startY = -1;
        let endY = -1;
        let lastX = -1;
        let lastY = -1;

        seats.forEach((seat: ISeat) => {

            const { x, y } = seat.cords;

            if (startY === -1) {

                if (!seat.reserved) {
                    startY = y;
                }
                
            } else {

                if (x > lastX || y - 1 !== lastY || seat.reserved) {
                    endY = lastY;
                    intervals.push({
                        startY, endY, row: x > lastX ? lastX : x
                    });

                    if (seat.reserved) {
                        startY = -1;
                    } else {
                        startY = y;

                    }

                }  

            }

            lastX = x;
            lastY = y;

        });

        intervals.sort((int1: IInterval, int2: IInterval) => (
            (int1.endY - int1.startY) + 1 < (int2.endY - int2.startY) + 1 ? 1 : -1
        ))

        console.log(intervals);

    }

    return (
        <SeatsGrid gridX={gridX} gridY={gridY}>
            {seats.map(seat => {
                return (
                    <Seat
                        type={seat.reserved ? "reserved" : "available"}
                        col={seat.cords.y + 1}
                        row={seat.cords.x + 1}
                    />
                )
            })}
        </SeatsGrid>
    )
}

export default Seats;