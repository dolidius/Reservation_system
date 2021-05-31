import styled from "styled-components";

import { Button } from '@material-ui/core';


interface ISeatsGridProps {
    gridY: number;
    gridX: number;
}

export const SeatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props: ISeatsGridProps) => props.gridY}, auto);
    grid-template-rows: repeat(${(props: ISeatsGridProps) => props.gridX}, auto);
    grid-gap: 3px;

`

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
`

export const BookButton = styled(Button)`
    height: 3.5rem;
    width: 15rem;
`

export const Spacer = styled.div`
    flex: 1
`