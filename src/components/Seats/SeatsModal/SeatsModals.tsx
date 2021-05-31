import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import SeatsModal from './SeatsModal';

import { setNewTicketsAmount } from '../../../redux/actions/seatsActions';
import { connect } from 'react-redux';
import ISeat from '../../../interfaces/ISeat';

import { setBookingSeats } from '../../../redux/actions/bookingActions';
import ICords from '../../../interfaces/ICords';


interface IProps {
    history: RouteComponentProps['history'];
    setNewTicketsAmount: (seatsToChoose: number) => object;
    seats: ISeat[];
    seatsToChoose: number;
    tooFewChosen: boolean;
    back: () => void;
    setBookingSeats: (bookedSeats: ICords[]) => object;
    chosenSeats: ICords[];
    bookSeats: () => void;
}

const SeatsModals: React.FC<IProps> = ({ history, setNewTicketsAmount, seats, seatsToChoose, tooFewChosen, back, setBookingSeats, chosenSeats, bookSeats }) => {

    const [tooManyTickets, setTooManyTickets] = useState(false);
    const [maximumTickets, setMaximumTickets] = useState(0);

    useEffect(() => {

        let maximumTickets: number = calculateMaximumTickets();

        if (seatsToChoose > maximumTickets) {
            setTooManyTickets(true);
            setMaximumTickets(maximumTickets);
        }

    }, [])

    const tooManyTicketsBack = () => {
        history.push({
            pathname: "/",
        });
    }

    const calculateMaximumTickets = () => {

        let availableTickets = 0;

        seats.forEach(seat => {
            if (!seat.reserved) {
                availableTickets++;
            }
        })

        return availableTickets;

    }

    const continueWithMaximum = () => {
        setNewTicketsAmount(maximumTickets);
        setTooManyTickets(false);
    }

    return (
        <>

            {tooFewChosen &&
                <SeatsModal
                    continueBooking={bookSeats}
                    back={back}
                    message="Wybrano inną ilość miejsc niż na początku, kontynuować mimo to?"
                />
            }

            {tooManyTickets &&
                <SeatsModal
                    continueBooking={continueWithMaximum}
                    back={tooManyTicketsBack}
                    message={`Niestety nie mamy tyle dostępnych biletów, kontynuuwać z maskymalną ilością równą ${maximumTickets}?`}
                />
            }
        </>
    )

}

export default connect(null, { setNewTicketsAmount, setBookingSeats })(SeatsModals);