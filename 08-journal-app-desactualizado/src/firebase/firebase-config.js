import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmHVG6uSb3ZRoFUD0adA1h5EvQYCFAJXM",
  authDomain: "react-app-curso-3d248.firebaseapp.com",
  projectId: "react-app-curso-3d248",
  storageBucket: "react-app-curso-3d248.appspot.com",
  messagingSenderId: "480926440803",
  appId: "1:480926440803:web:876b9be96b41984e870756"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); //esta es la bd.
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase }