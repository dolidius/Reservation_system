import styled from "styled-components";

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