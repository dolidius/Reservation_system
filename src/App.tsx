import React from 'react';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';

import store from './redux/store';

import GlobalStyle from './App.style';

import Home from './components/Screens/Home/Home';

const App = () => {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Home />
        </Provider>
    );
}

export default App;
