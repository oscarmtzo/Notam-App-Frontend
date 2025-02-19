import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css'
import * as serviceWorker from './serviceWorker';
import Router from './Router';
import 'antd/dist/antd.css'
import 'rsuite/dist/styles/rsuite.min.css'
import './index.css';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
