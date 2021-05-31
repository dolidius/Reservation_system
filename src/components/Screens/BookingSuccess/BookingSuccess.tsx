import React from 'react';

import { connect } from 'react-redux';
import IBookingState from '../../../interfaces/storeStates/IBookingState';
import { ViewportContainer } from '../../../styles/Layout/Container.style';

import { Title, Container, TitleSecondary, SeatTypography } from './BookingSuccess.style';

import { Box } from '@material-ui/core';

interface IProps {
    bookingStore: IBookingState;
}

const BookingSuccess: React.FC<IProps> = ({ bookingStore }) => {
    return (
        <ViewportContainer>
            <Container>
                <Title>
                    Twoja rezerwacja przebiegła pomyślnie!
                </Title>

                <Box mt={5}>
                    <TitleSecondary>
                        Wybrałeś miejsca:
                    </TitleSecondary>
                </Box>

                {bookingStore.bookedSeats.map(seat => (
                    <SeatTypography key={`s${seat.x}${seat.y}`}>
                        -rząd {seat.x}, miejsce {seat.y}, s{`${seat.x}${seat.y}`}
                    </SeatTypography>
                ))}

                <Box mt={7}>
                    <TitleSecondary>
                        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji
                    </TitleSecondary>
                </Box>

            </Container>
        </ViewportContainer>
    )
}

const mapStateToProps = (state: any) => ({
    bookingStore: state.booking
})

export default connect(mapStateToProps, {})(BookingSuccess);