import React from 'react';

import { Provider } from 'react-redux';

import store from './redux/store';

import GlobalStyle from './App.style';

const App = () => {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <div>
                test
            </div>
        </Provider>
    );
}

export default App;
