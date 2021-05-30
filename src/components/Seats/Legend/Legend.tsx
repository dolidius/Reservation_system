import React from 'react';

import { AvailableSeat, ChosenSeat, ReservedSeat } from '../Seat/Seat.style';

import { LegendContainer, LegendText } from './Legend.style';


const Legend = () => {
    return (
        <>
            <LegendContainer>
                <AvailableSeat grid={false} col={0} row={0} />
                <LegendText>Miejsca dostępne</LegendText>
            </LegendContainer>

            <LegendContainer>
                <ReservedSeat grid={false} col={0} row={0} />
                <LegendText>Miejsca zarezerowane</LegendText>
            </LegendContainer>

            <LegendContainer>
                <ChosenSeat grid={false} col={0} row={0} />
                <LegendText>Twój wybór</LegendText>
            </LegendContainer>
        </>
    )
}

export default Legend;