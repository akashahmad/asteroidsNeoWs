import React from 'react';
import './tailwind.output.css';
import './tailwind.css';
import Routes from './routes'
import './assets/style/style.css'
import {BrowserRouter} from 'react-router-dom'
import {GlobalProvider} from './context/GlobalState';

function App() {
    return (
        <BrowserRouter>
            <GlobalProvider>
                <Routes />
            </GlobalProvider>
        </BrowserRouter>
    );
}

export default App;
