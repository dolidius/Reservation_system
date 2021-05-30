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

    background: linear-gradient(rgba(0,0,0, 0.9), rgba(0,0,0, 0.8)), url('https://images.pexels.com/photos/375885/pexels-photo-375885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    background-position: center;
`;