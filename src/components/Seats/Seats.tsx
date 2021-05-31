import React, { useEffect, useState } from 'react';
import ICords from '../../interfaces/ICords';
import ISeat from '../../interfaces/ISeat';

import { connect } from 'react-redux';

import SeatsGridContainer from './SeatsGridContainer';
import Legend from './Legend/Legend';
import SeatsModal from './SeatsModal/SeatsModal';
import SeatsModals from './SeatsModal/SeatsModals';

import { setBookingSeats } from '../../redux/actions/bookingActions';

import { RouteComponentProps } from 'react-router-dom';
import { BookButton, Footer, Spacer } from './Seats.style';
import { Box, Typography } from '@material-ui/core';

interface IProps {
    history: RouteComponentProps['history'],
    gridX: number;
    gridY: number;
    seats: ISeat[];
    seatsToChoose: number;
    nextToEachOther: boolean;
    setBookingSeats: (bookedSeats: ICords[]) => object;
}

interface IInterval {
    startY: number,
    endY: number,
    row: number;
}

const Seats: React.FC<IProps> = ({ history, gridX, gridY, seats, seatsToChoose, nextToEachOther, setBookingSeats }) => {

    const [chosenSeats, setChosenSeats] = useState<ICords[]>([]);

    const [isModalOpened, setModalOpened] = useState(false);


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

            } else if (x > lastX || y - 1 !== lastY || seat.reserved) {
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
            for (let i = interval.startY; i <= interval.endY; i++) {
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
                amount++;
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

    const submitSeats = () => {

        let chosenNum = seatsToChoose - chosenSeats.length;

        if (chosenNum != 0) {
            setModalOpened(true);
        } else {
            bookSeats();
        }

    }

    const bookSeats = () => {
        setBookingSeats(chosenSeats);

        history.push({
            pathname: "/rezerwacja/success",
        });
    }

    const closeModal = () => {
        setModalOpened(false);
    }

    return (
        <div>
            <SeatsGridContainer
                gridX={gridX}
                gridY={gridY}
                seats={seats}
                chosenSeats={chosenSeats}
                onSeatAvailableClick={onSeatAvailableClick}
                onSeatChosenClick={onSeatChosenClick}
            />

            <SeatsModals
                history={history}
                seats={seats}
                seatsToChoose={seatsToChoose}
                tooFewChosen={isModalOpened}
                back={closeModal}
                chosenSeats={chosenSeats}
                bookSeats={bookSeats}
            />

            <Box mt={5}>
                <Typography style={{ color: '#fff' }}>Pozostałe miejsca do wyboru: {seatsToChoose - chosenSeats.length}</Typography>
            </Box>

            <Footer>
                <Legend />

                <BookButton onClick={submitSeats} color="primary" variant="contained">
                    Rezerwuj
                </BookButton>
            </Footer>


        </div>
    )
}

export default connect(null, { setBookingSeats })(Seats);