import React, { useEffect, useState } from 'react';
import ICords from '../../interfaces/ICords';
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

    const [chosenSeats, setChosenSeats] = useState<ICords[]>([]);

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

        return convertIntervalsToCords(pickedIntervals);

    }

    const convertIntervalsToCords = (intervals: IInterval[]) => {

        const defaultSeats: ICords[] = [];

        intervals.forEach(interval => {
            console.log(interval);
            for (let i = interval.startY; i <= interval.endY; i ++) {
                defaultSeats.push({ x: interval.row, y: i });
            }

        });

        return defaultSeats;

    }

    const findFristAvailableSeats = () => {
        const defaultSeats: ICords[] = [];

        let amount = 0;

        for (const seat of seats) {

            if (!seat.reserved) {
                defaultSeats.push(seat.cords);
                amount ++;
            }

            if (amount === seatsToChoose) {
                break;
            }

        }

        return defaultSeats;

    }

    const chooseDefaultSeats = () => {

        if (!nextToEachOther) {
            setChosenSeats(findFristAvailableSeats());
        } else {
            setChosenSeats(findCloseSeats());
        }

    }

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

    const onSeatAvailableClick = (x: number, y: number) => {

        if (chosenSeats.length < seatsToChoose) {
            setChosenSeats([]);

            let newChosenSeats = chosenSeats;

            newChosenSeats.push({ x, y });

            setChosenSeats([...newChosenSeats]);
        }

    }

    const onSeatChosenClick = (x: number, y: number) => {

        let newChosenSeats = chosenSeats;

        newChosenSeats = newChosenSeats.filter(seat => seat.x != x || seat.y != y);

        setChosenSeats(newChosenSeats);

    }

    return (
        <SeatsGrid gridX={gridX} gridY={gridY}>
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

export default Seats;