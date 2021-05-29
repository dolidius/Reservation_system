import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import ISeatsState from '../../../interfaces/storeStates/ISeatsState';

import Seats from '../../Seats/Seats';
import Spinner from '../../Helpers/Spinner/Spinner';

import IFormValues from '../../../interfaces/IFormValues';

interface IProps {
    seatsStore: ISeatsState,
    state: IFormValues
}

const Booking: React.FC<IProps> = ({ seatsStore, state }) => {

    const [verticalGrid, setVerticalGrid] = useState(-1);
    const [horizontalGrid, setHorizontalGrid] = useState(-1);

    useEffect(() => {
        console.log(seatsStore);
        findSeatsGrid();
    }, [seatsStore]);

    useEffect(() => {
        console.log(state);
    },[state])

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
            <Spinner />
        )
    } 

    return (
        <Seats 
            gridX={verticalGrid + 1}
            gridY={horizontalGrid + 1}
            seats={seatsStore.seats}
        />
    )

}

const mapStateToProps = (state: any) => ({
    seatsStore: state.seats
})

export default connect(mapStateToProps, {})(Booking);