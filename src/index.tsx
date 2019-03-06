import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import configureStore, { history } from './client/redux/configure-store'

import App from './client/App'


const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById("react-app")
);