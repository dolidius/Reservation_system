import React from 'react';

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
