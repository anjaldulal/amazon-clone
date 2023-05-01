// as per firebase latest version the import should be done like this

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcxlfYra5r0HZlH0d_yOolZhLnPI05CrQ",
    authDomain: "clone-8431b.firebaseapp.com",
    projectId: "clone-8431b",
    storageBucket: "clone-8431b.appspot.com",
    messagingSenderId: "718577825386",
    appId: "1:718577825386:web:5a7cb798424e130c07fc13",
    measurementId: "G-TB02DYVFGH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };