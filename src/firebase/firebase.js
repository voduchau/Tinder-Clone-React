import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC9zb_5kT6KIMwRT5C3iPrSmtJCtMkXTwU",
    authDomain: "tinder-clone-1b592.firebaseapp.com",
    databaseURL: "https://tinder-clone-1b592.firebaseio.com",
    projectId: "tinder-clone-1b592",
    storageBucket: "tinder-clone-1b592.appspot.com",
    messagingSenderId: "555298097378",
    appId: "1:555298097378:web:a9b9ec83047f55a67d36bb",
    measurementId: "G-0QPGTC5W5Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
