import styled from "styled-components";

interface ISeatProps {
    col: number;
    row: number;
}

export const Seat = styled.div`
    width: 30px;
    height: 30px;

    grid-column-start: ${(props: ISeatProps) => props.col};
    grid-column-end: ${(props: ISeatProps) => props.col + 1};

    grid-column-start: ${(props: ISeatProps) => props.row};
    grid-column-end: ${(props: ISeatProps) => props.row + 1};
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