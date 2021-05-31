import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import ISeatsState from '../../../interfaces/storeStates/ISeatsState';

import Seats from '../../Seats/Seats';

import { RouteComponentProps } from 'react-router-dom';
import { ViewportContainer } from '../../../styles/Layout/Container.style';
import { SeatsContainer } from './Booking.style';

import { CircularProgress } from '@material-ui/core';

interface IProps {
    history: RouteComponentProps['history'],
    seatsStore: ISeatsState,
}

const Booking: React.FC<IProps> = ({ history, seatsStore }) => {

    const [verticalGrid, setVerticalGrid] = useState(-1);
    const [horizontalGrid, setHorizontalGrid] = useState(-1);

    useEffect(() => {
        findSeatsGrid();
    }, [seatsStore]);

    const findSeatsGrid = () => {

        let verticalGrid: number | null = null;
        let horizontalGrid: number | null = null;

        seatsStore.seats.forEach(seat => {

            const { x, y } = seat.cords;

            if (verticalGrid === null || verticalGrid < x) {
                verticalGrid = x;
            }

            if (horizontalGrid === null || horizontalGrid < y) {
                horizontalGrid = y;
            }

        })

        if (verticalGrid === null) verticalGrid = -1;
        if (horizontalGrid === null) horizontalGrid = -1;

        setVerticalGrid(verticalGrid);
        setHorizontalGrid(horizontalGrid);

    }

    if (seatsStore.loading) {
        return (
            <ViewportContainer centered>
                <CircularProgress color="primary" size={150} />
            </ViewportContainer>
        )
    }

    return (
        <ViewportContainer>
            <SeatsContainer>
                <Seats
                    history={history}
                    gridX={verticalGrid + 1}
                    gridY={horizontalGrid + 1}
                    seats={seatsStore.seats}
                    seatsToChoose={seatsStore.seatsToChoose}
                    nextToEachOther={seatsStore.nextToEachOther}
                />
            </SeatsContainer>
        </ViewportContainer>
    )

}

const mapStateToProps = (state: any) => ({
    seatsStore: state.seats
})

export default connect(mapStateToProps, {})(Booking);