import styled from "styled-components";

export const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface IViewportProps {
    centered?: boolean;
}

export const ViewportContainer = styled.div`
    width: 100%;
    height: 100vh;

    ${({ centered }: IViewportProps) =>
        centered &&
        `
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    background: #251464;

    /* background: #D3CCE3; 
    background: -webkit-linear-gradient(
        to right,
        #e9e4f0,
        #d3cce3
    ); 
    background: linear-gradient(
        to right,
        #e9e4f0,
        #d3cce3
    );  */
`;
