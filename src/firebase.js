import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwNDP6lTIPlXA4xUbQJDts45QfQGnkB14",
  authDomain: "zona-87983.firebaseapp.com",
  databaseURL: "https://zona-87983.firebaseio.com",
  projectId: "zona-87983",
  storageBucket: "zona-87983.appspot.com",
  messagingSenderId: "87888204090",
  appId: "1:87888204090:web:18a7372588222564708003",
  measurementId: "G-BF9RQ5C38M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
