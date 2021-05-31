import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { getSeats } from '../../../redux/actions/seatsActions';

import { Button, TextField, Checkbox, FormControlLabel, Box, Typography } from '@material-ui/core';

import { ViewportContainer } from '../../../styles/Layout/Container.style';
import { FormContainer } from './HomeForm.style';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})


interface IProps {
    history: RouteComponentProps['history'];
    getSeats: (seatsToChoose: number, nextToEachOther: boolean) => void;
}

const Home: React.FC<IProps> = ({ history, getSeats }) => {

    const [ticketsNumber, setTicketsNumber] = useState("0");
    const [nextToEachOther, setNextToEachOther] = useState(false);

    const onFinish = (e: any) => {
        e.preventDefault();
        getSeats(parseInt(ticketsNumber), nextToEachOther);
        history.push({
            pathname: "/rezerwacja",
        });
    }

    const handleTicketsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTicketsNumber(event.target.value);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNextToEachOther(event.target.checked)
    }

    return (
        <ThemeProvider theme={theme} >
            <ViewportContainer centered>
                <FormContainer onSubmit={onFinish}>
                    <TextField
                        required
                        id="filled-required"
                        label="Liczba Miejsc"
                        value={ticketsNumber}
                        onChange={handleTicketsChange}
                        variant="standard"
                        placeholder="0"
                        type="number"
                        size="medium"
                    />
                    <Box py={1}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={nextToEachOther}
                                    onChange={handleCheckboxChange}
                                    color="primary"

                                />
                            }
                            label={<Typography style={{ color: '#fff' }}>Czy miejsca mają być obok siebie?</Typography>}

                        />
                    </Box>

                    <Box>
                        <Button size="large" fullWidth={false} variant="contained" color="primary" type="submit">
                            Wybierz miejsca
                    </Button>
                    </Box>

                </FormContainer>
            </ViewportContainer>
        </ThemeProvider>
    )
}

const mapStateToProps = () => ({});

export default connect((mapStateToProps), { getSeats })(Home);
