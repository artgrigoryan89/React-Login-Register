import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

const App = () => {
    return (
        <Routes/>
    )
}

ReactDOM.render(<App/>, document.querySelector('.input_container'));