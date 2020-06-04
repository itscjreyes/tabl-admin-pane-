import firebase from 'firebase';
import "firebase/auth";

const key = process.env.REACT_APP_FIREBASE_KEY;
const id = process.env.REACT_APP_FIREBASE_ID;

const config = {
    apiKey: key,
    authDomain: "tabl-9c663.firebaseapp.com",
    databaseURL: "https://tabl-9c663.firebaseio.com",
    projectId: "tabl-9c663",
    storageBucket: "tabl-9c663.appspot.com",
    messagingSenderId: "1018707962108",
    appId: id,
    measurementId: "G-SVE9MJNCHZ"
};

firebase.initializeApp(config);

export default firebase;