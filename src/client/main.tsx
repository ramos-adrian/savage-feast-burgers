import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './reducers/Cart';
import OrderReducer from './reducers/Order';
import HamburgersService from './services/Hamburgers.ts';
import {setHamburgers} from './reducers/Hamburgers.ts';
import HamburgersReducer from './reducers/Hamburgers.ts';
import {Hamburger} from './types.ts';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {initMercadoPago} from '@mercadopago/sdk-react'

const MP_PUBLIC_KEY: string = String(import.meta.env.VITE_MP_PUBLIC_KEY);
initMercadoPago(MP_PUBLIC_KEY);

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fafafa',
        },
    },
});

const store = configureStore({
    reducer: {
        cart: CartReducer,
        hamburgers: HamburgersReducer,
        order: OrderReducer,
    },
});

HamburgersService.getAll().then((hamburgers: Hamburger[]) => {
    store.dispatch(setHamburgers(hamburgers));
}).catch((error: Error) => {
    console.log('There was an error fetching hamburgers', error);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline/>
                    <App/>
                </ThemeProvider>
            </Router>
        </Provider>
    </React.StrictMode>,
);
