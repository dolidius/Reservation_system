import React from 'react';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from './redux/store';

import GlobalStyle from './App.style';

import Home from './components/Screens/Home/Home';
import Booking from './components/Screens/Booking/Booking';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <GlobalStyle />
                <Route path="/" exact component={Home} />
                <Route path="/rezerwacja" exact component={Booking} />
            </Router>
        </Provider>
    );
}

export default App;
