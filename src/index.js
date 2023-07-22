import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import './assets/css/core.css'
import './assets/fonts/raleway/stylesheet.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
