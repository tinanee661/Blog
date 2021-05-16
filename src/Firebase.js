import firebase from 'firebase';

const settings = {timestampsInSnapshots:true};

const config = {
    apiKey: "AIzaSyCfztGw3HqiIgkue6j4brqBtf02HikRXcU",
    authDomain: "projekti2021-4f79b.firebaseapp.com",
    databaseURL: "https://projekti2021-4f79b-default-rtdb.firebaseio.com",
    projectId: "projekti2021-4f79b",
    storageBucket: "projekti2021-4f79b.appspot.com",
    messagingSenderId: "152892244498",
    appId: "1:152892244498:web:e8d2af364357a64754cecb"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
