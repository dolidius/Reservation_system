import styled from "styled-components";

export const Seat = styled.div`
    width: 30px;
    height: 30px;
`;

export const AvailableSeat = styled(Seat)`
    border: 1px solid black;
`;

export const ChosenSeat = styled(Seat)`
    background-color: #FF8A05;
`

export const ReservedSeat = styled(Seat)`
    background-color: #2A2A2A;
`

export const DisabledSeat = styled(Seat)`
    background: transparent;
`