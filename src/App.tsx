import React from 'react';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from './redux/store';

import GlobalStyle from './App.style';

import Home from './components/Screens/Home/Home';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <GlobalStyle />
                <Route path="/" exact component={Home} />
            </Router>
        </Provider>
    );
}

export default App;
