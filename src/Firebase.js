import firebase from 'firebase';

const settings = {timestampsInSnapshots:true};

const config = {
    apiKey: "AIzaSyAtpmSGTsksuq4bLsQLY_8j8HdWmt8dc_U",
    authDomain: "projekti2021-f2abb.firebaseapp.com",
    projectId: "projekti2021-f2abb",
    storageBucket: "projekti2021-f2abb.appspot.com",
    messagingSenderId: "834980427190",
    appId: "1:834980427190:web:562f76c6475445efccbd17"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
