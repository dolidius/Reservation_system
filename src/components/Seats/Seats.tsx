import React, { useEffect, useState } from 'react';
import ISeat from '../../interfaces/ISeat';

import Seat from './Seat/Seat';

import { SeatsGrid } from './Seats.style';

interface IProps {
    gridX: number;
    gridY: number;
    seats: ISeat[];
    seatsToChoose: number;
    nextToEachOther: boolean;
}

interface IInterval {
    startY: number,
    endY: number,
    row: number;
}

const Seats: React.FC<IProps> = ({ gridX, gridY, seats, seatsToChoose, nextToEachOther }) => {

    const [intervals, setIntervals] = useState<IInterval[]>([]);

    useEffect(() => {
        chooseDefaultSeats()
    }, [])

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
        ));

        const pickedIntervals: IInterval[] = [];

        let amountToChoose = seatsToChoose;

        for (const interval of intervals) {
            console.log(interval);
            const intervalLength = (interval.endY - interval.startY) + 1;

            if (intervalLength === amountToChoose) {
                pickedIntervals.push(interval);
                amountToChoose = 0;
                break;
            } else if (intervalLength > amountToChoose) {
                pickedIntervals.push({
                    startY: interval.startY,
                    endY: (interval.startY + amountToChoose) - 1,
                    row: interval.row
                });
                amountToChoose = 0;
                break;
            } else {
                pickedIntervals.push(interval);
                amountToChoose -= intervalLength;
            }

        }

        setIntervals(pickedIntervals);

    }

    const findFristAvailableSeats = () => {
        const intervals: IInterval[] = [];

        let amount = 0;

        for (const seat of seats) {
            const { x, y } = seat.cords;

            if (!seat.reserved) {
                intervals.push({startY: y, endY: y, row: x});
                amount ++;
            }

            if (amount === seatsToChoose) {
                break;
            }

        }

        setIntervals(intervals);

    }

    const chooseDefaultSeats = () => {

        if (!nextToEachOther) {
            findFristAvailableSeats();
        } else {
            findCloseSeats();
        }

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