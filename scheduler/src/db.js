import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDHDZPGv9hcwndokwReXt7MLdJke2YFNX8",
    authDomain: "scheduler-d3f1b.firebaseapp.com",
    databaseURL: "https://scheduler-d3f1b.firebaseio.com",
    projectId: "scheduler-d3f1b",
    storageBucket: "scheduler-d3f1b.appspot.com",
    messagingSenderId: "784874686575",
    appId: "1:784874686575:web:2bc24244c43dc5008e659a",
    measurementId: "G-Y9YBWDS31X"
  };
  
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.database().ref();

