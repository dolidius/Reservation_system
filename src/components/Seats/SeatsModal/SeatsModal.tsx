import React from 'react';

import { ModalView, ModalContainer, Spacer } from './SeatsModal.style';
import { Typography, Box, Button } from '@material-ui/core';

interface IProps {
    continueBooking: () => void;
    back: () => void;
    message: string;
}

const SeatsModal: React.FC<IProps> = ({ back, continueBooking, message }) => {
    return (
        <ModalView>
            <ModalContainer>
                <Box>
                    <Typography style={{ fontSize: '1.3rem' }}>
                        {message}
                    </Typography>
                </Box>

                <Box mt={2} style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button onClick={() => back()} size="large" variant="contained" color="primary">Wróć</Button>
                    <Spacer />
                    <Button onClick={() => continueBooking()} size="large" variant="contained" color="primary">Kontynuuj</Button>
                </Box>

            </ModalContainer>
        </ModalView>
    )
}

export default SeatsModal;