import styled from "styled-components";
import { Button } from '@material-ui/core';

export const ModalView = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    padding: 5rem 10rem;
    background: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Spacer = styled.div`
    width: 2rem;
`