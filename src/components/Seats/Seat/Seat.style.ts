import styled from "styled-components";

interface ISeatProps {
    col: number;
    row: number;
}

interface ISeatProps {
    grid: boolean;
    col: number;
    row: number;
}

export const Seat = styled.div`
    width: 39px;
    height: 39px;

    background: transparent;
    border-radius: 3px;
    margin: 2px 0;

    ${({ grid, col, row }: ISeatProps) =>
        grid &&
        `
        grid-column-start: ${col};
        grid-column-end: ${col + 1};
    
        grid-row-start: ${row};
        grid-row-end: ${row + 1};
    `}

    /* grid-column-start: ${(props: ISeatProps) => props.col};
    grid-column-end: ${(props: ISeatProps) => props.col + 1};

    grid-row-start: ${(props: ISeatProps) => props.row};
    grid-row-end: ${(props: ISeatProps) => props.row + 1}; */

`;

export const AvailableSeat = styled(Seat)`
    border: 3px solid #3C3491;
    cursor: pointer;
`;

export const ChosenSeat = styled(Seat)`
    background-color: #FFAE6D;
    border: 3px solid #FFAE6D;
    box-shadow: 0 0 12px #FFAE6D;
    cursor: pointer;
`

export const ReservedSeat = styled(Seat)`
    background-color: #5646B1;
    border: 3px solid #5646B1;
`