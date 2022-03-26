import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoQMojLH0UWeh45y_WRhBMIeOQ_ipcd2I",
    authDomain: "facebook-project-20592.firebaseapp.com",
    projectId: "facebook-project-20592",
    storageBucket: "facebook-project-20592.appspot.com",
    messagingSenderId: "597868523562",
    appId: "1:597868523562:web:577cd76a1131c2ea285353",
    measurementId: "G-FWM94QK19K"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();



  export {db, auth, provider};

