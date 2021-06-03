import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyCJOJkWXzlQJ_y3TnXQUwR1SaElpdLpurA",
    authDomain: "cart-57545.firebaseapp.com",
    projectId: "cart-57545",
    storageBucket: "cart-57545.appspot.com",
    messagingSenderId: "25027836946",
    appId: "1:25027836946:web:4235b40ad04bb26c7a2ccb"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;