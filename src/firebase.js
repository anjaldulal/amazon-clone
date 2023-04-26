// as per firebase latest version the import should be done like this

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyASGVTlB2G5Jev13WbXCpIPdBiYcIv3VtI",
    authDomain: "clone-a68a0.firebaseapp.com",
    projectId: "clone-a68a0",
    storageBucket: "clone-a68a0.appspot.com",
    messagingSenderId: "646157820394",
    appId: "1:646157820394:web:e47d530051533a0f4dd293",
    measurementId: "G-Y5S7J1HDNJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };