import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyCFV5_fKEEpejXvK17j51b0fNIzecB7tV8",
  authDomain: "messenger-app-8d4f2.firebaseapp.com",
  databaseURL: "https://messenger-app-8d4f2.firebaseio.com",
  projectId: "messenger-app-8d4f2",
  storageBucket: "messenger-app-8d4f2.appspot.com",
  messagingSenderId: "732165776305",
  appId: "1:732165776305:web:d5836fb09a83deae849390",
  measurementId: "G-LLWDDZT8MT",
});

const db = firebase.firestore();

export default db;