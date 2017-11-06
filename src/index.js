import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD6cxVZoaJ4G2Y09pCBKmfIc9tzgCDPAy4",
    authDomain: "test-10595.firebaseapp.com",
    databaseURL: "https://test-10595.firebaseio.com",
    projectId: "test-10595",
    storageBucket: "test-10595.appspot.com",
    messagingSenderId: "743627774703"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
