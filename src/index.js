import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import *as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <body style={{backgroundColor: 'lavender'}}>
    <App />
    </body>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();

//if you want your app to work offline and load faster, you can change unregister to register below.

serviceWorker.unregister();