import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from 'react-redux';
import store from '@store/index';
import Root from '@components/Root';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Root />
        </Provider>
    </React.StrictMode>
);
